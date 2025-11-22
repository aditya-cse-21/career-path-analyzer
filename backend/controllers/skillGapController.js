import { getSkillMap, calculateSkillGap } from '../utils/skillUtils.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const analyzeSkillGap = async (req, res, next) => {
  try {
    const { targetRole, currentSkills } = req.body;

    if (!targetRole || !currentSkills || !Array.isArray(currentSkills)) {
      return res.status(400).json({
        error: 'Missing required fields: targetRole and currentSkills (array)'
      });
    }

    const skillMap = getSkillMap();
    const requiredSkills = skillMap[targetRole];

    if (!requiredSkills) {
      return res.status(400).json({
        error: `Target role "${targetRole}" not found. Available roles: ${Object.keys(skillMap).join(', ')}`
      });
    }

    const normalizedCurrent = currentSkills.map(skill => skill.trim().toLowerCase());
    const normalizedRequired = requiredSkills.map(skill => skill.toLowerCase());

    const analysis = calculateSkillGap(normalizedCurrent, normalizedRequired, requiredSkills);

    try {
      const dataDir = path.join(__dirname, '../data');
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, 'last-request.json');
      await fs.writeFile(filePath, JSON.stringify({
        timestamp: new Date().toISOString(),
        targetRole,
        currentSkills,
        analysis
      }, null, 2));
    } catch (fileError) {
      console.warn('Could not save request to file:', fileError.message);
    }

    res.json(analysis);
  } catch (error) {
    next(error);
  }
};


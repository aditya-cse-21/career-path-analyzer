import { getRoadmap } from '../utils/roadmapUtils.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateRoadmap = async (req, res, next) => {
  try {
    const { targetRole } = req.body;

    if (!targetRole) {
      return res.status(400).json({
        error: 'Missing required field: targetRole'
      });
    }

    const roadmap = getRoadmap(targetRole);

    if (!roadmap) {
      return res.status(400).json({
        error: `Roadmap not available for role "${targetRole}"`
      });
    }

    try {
      const dataDir = path.join(__dirname, '../data');
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, 'last-roadmap-request.json');
      await fs.writeFile(filePath, JSON.stringify({
        timestamp: new Date().toISOString(),
        targetRole,
        roadmap
      }, null, 2));
    } catch (fileError) {
      console.warn('Could not save roadmap request to file:', fileError.message);
    }

    res.json(roadmap);
  } catch (error) {
    next(error);
  }
};


import { promises as fs } from 'fs';
import { resolve } from 'path';

export default defineEventHandler(async (event) => {
    // Đường dẫn tuyệt đối tới file JSON
    const filePath = resolve('server/data/categories.json');
    
    // Đọc dữ liệu từ file JSON
    const data = await fs.readFile(filePath, 'utf-8');
    
    // Trả về dữ liệu JSON
    return JSON.parse(data);
  });
const path = require("path");

// Lấy đường dẫn file từ args
const fileToRun = process.argv[2];

if (!fileToRun) {
  console.error("❌ Vui lòng truyền vào file cần chạy.");
  process.exit(1);
}

// Chạy file cần thiết
require(path.resolve(fileToRun));

// Giữ process chạy
process.stdin.resume();


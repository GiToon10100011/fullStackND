export const imageUrlFormatter = (imageUrl?: string) => {
  if (!imageUrl) {
    return "https://placehold.co/600x300/e9ecef/6c757d?text=No+Image"; // 기본 이미지 URL
  }
  // 이미지 URL이 상대 경로인 경우 절대 경로로 변환
  if (imageUrl) {
    return `http://localhost:7777/uploads/${imageUrl}`;
  }
};

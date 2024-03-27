export default function PhotoPage({ photos }) {
  console.log(photos);
  return (
    <main className="PhotoPage">
      <p>여기는 상품목록 with photo</p>
      {photos.map((photos) => {
        return (
          <ul key={photos.id}>
            <li>{photos.id}</li>
            <li>
              <img src={photos.url} alt="test" />
            </li>
          </ul>
        );
      })}
    </main>
  );
}

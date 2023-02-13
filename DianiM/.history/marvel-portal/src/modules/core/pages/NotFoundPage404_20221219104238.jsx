import image from "./assets/";
const NotFoundPage404 = () => {
  return (
    <>
      <section>
        <h1>404 PAGE NOT FOUND</h1>
        <p>
          Check that you typed the address correctly, go back to your previous page or try using our
          site search to find something specific.
        </p>
      </section>
      <section>
      <img src={image} />
      </section>
    </>
  );
};

export default NotFoundPage404;

import Header from "./components/Header";
import Footer from "./components/Footer";
import BooksFilter from "./components/BooksFilter";
function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <BooksFilter />
        <p className="text-3xl font-bold underline ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus consequuntur, itaque delectus voluptatum expedita
          soluta, earum similique, sapiente veniam molestias corporis quasi
          provident nobis reiciendis veritatis doloremque? Blanditiis, eveniet
          odio.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default App;

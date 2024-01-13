import Footer from "../components/Footer.jsx";
import { FormRegist } from "../components/Form.jsx"
import Header from "../components/Header.jsx"

export default function GetStart() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen">
        <Header/>
        <main className="flex-1 bg-gray-300 flex flex-row justify-around items-center">
          <div className="text-left text-lg max-w-screen-md">
            <h1 className="font-bold">To Do Turbo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              obcaecati, illo debitis tempora distinctio mollitia? Maiores unde
              cum vel amet eum quam rem voluptatibus vero fugit doloribus.
              Illum, nostrum iusto?
            </p>
          </div>
          <FormRegist title="Register" />
        </main>
        <Footer />
      </div>
    </>
  );
}


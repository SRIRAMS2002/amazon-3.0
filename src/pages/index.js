import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductFeed from "@/components/ProductFeed";
import Head from "next/head";
import Image from "next/image";


export default function Home({products}) {
  // const products = await fetchProducts();
  return (
    <div className="bg-gray-100">
      <Head>
        <title>My HomePage</title>
      </Head>

      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products}/>
      </main>

      <Footer />
    </div>
  );
}

// async function fetchProducts(context) {
//   const products = await fetch("https://fakestoreapi.com/products");
//   // await fetch("4000");
//   return products.json();
// }

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    }
  }
}

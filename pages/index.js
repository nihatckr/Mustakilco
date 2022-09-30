import { useEffect, useState } from "react";

import HomeSlider from "../components/HomeSlider";
import Layout from "../components/Layout";

import { slider } from "../components/data";

import { useRouter } from "next/router";

import { collection } from "firebase/firestore";
import { app, database } from "../firebase";

const Home = () => {
  const [index, setIndex] = useState(1);
  const [currentImage, setCurrentImage] = useState(slider);

  const databaseRef = collection(database, 'CRUD Data');

  let router = useRouter()

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (!token) {
      router.push('/register')
    }
  })

  const addData = () => {
    addData(databaseRef, {

    })
  }

  useEffect(() => {
    const lastIndex = currentImage.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, currentImage]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const nextImage = () => {
    setIndex(index - 1);
    console.log(index, "nextclick");
  };

  const previousImage = () => {
    setIndex(index + 1);
    console.log(index, "previousclick");
  };
  return (
    <Layout>
      <HomeSlider
        currentImage={currentImage}
        index={index}
        previousImage={previousImage}
        nextImage={nextImage}
      />
    </Layout>
  );
};

export default Home;

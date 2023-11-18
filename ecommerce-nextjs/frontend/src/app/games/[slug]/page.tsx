import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { getGame } from "@/libs/apis";
import { NextPage } from "next";

const GameItem = async (props: { params: {slug: string} }) => {
    //console.log(props);

    const {
        params: { slug}
    } = props;

    const gameDetails = await getGame(slug);

    return (
        <div>
            <CarouselSlider images={gameDetails.images} />
        </div>
    );
};

export default GameItem;

const classNames = {
    section: "py-16 lg:pb-36 px-4 lg:px-36 text-white text-center",
    heading: "text-3xl lg:text-4xl font-bold mb-3",
    subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
  };
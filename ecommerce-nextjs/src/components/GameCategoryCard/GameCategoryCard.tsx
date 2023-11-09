import { FC } from 'react';
import GameCategoryCardClassNames from './GameCategoryCardClassNames';
import Link from 'next/link';
import Image from 'next/image';

interface GameCatergoryCardProps {
    categoryName: string;
    categoryImage: string;
    slug: string;          
}

const GameCategoryCard: FC<GameCatergoryCardProps> = (props) => {
    const {
        categoryImage,
        categoryName,
        slug } = props;

        const { image, name, container, arrow } = GameCategoryCardClassNames;
    

        return (
        <Link href={`categories/${slug}`} className={container}>
            <Image 
              src={categoryImage}
              alt={name}
              width={200}
              height={200}
              className={image}
              />

              <h3 className={name}>{categoryName}</h3>

              <Image 
              src='/images/arrow.svg'
              alt='view'
              width={20}
              height={20}
              className={arrow}
              />
        </Link>

        
    );
};

export default GameCategoryCard;
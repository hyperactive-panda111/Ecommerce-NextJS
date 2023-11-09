import { FC } from "react";
import heroClassNames from "./heroClassNames";
import Link from "next/link";
import Image from 'next/image';

const HeroSection: FC<{ showLink?: boolean}> = (props) => {
    const { showLink } = props;

    return (
       <section className={heroClassNames.hero}>
        <div className={heroClassNames.grid}>
            <div className={heroClassNames.content}>
                <h1 className={heroClassNames.heading}>Gaming</h1>
                <h1 className={heroClassNames.ctaText}>Unlock Your Gaming Fantasies</h1>
                <p className={heroClassNames.paragraph}>
                    Discover Your Passion Through Gaming!
                </p>
                {showLink && (
                <div className="mt-8 sm:mt-10 rounded">
                    <Link href="#recent-games" className={heroClassNames.button}>
                        Find Games
                    </Link>
                </div>
                )}
            </div>

            <div className={heroClassNames.imageContainer}>
                <Image src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" 
                alt="3D Gaming" 
                className={heroClassNames.image}
                height={400} 
                width={400} />

            </div>
        </div>


       </section>
    );
};

export default HeroSection;
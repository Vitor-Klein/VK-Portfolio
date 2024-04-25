import './styles.css';
import Image from 'next/image'

export default function AboutMeCard() {
  return (
    <>
      <div className="cardContainer">
        <div className="imagaAndText">
          <Image
            alt=''
            src="./yellowPerson.svg"
            width={700}
            height={700}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio asdd Et
            ultrices neque ornare aenean euismod elit, sed do eiusmod elit, sed do sea.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio asdd
            Et ultrices neque ornare aenean euismod elit, sed do eiusmod elit, sed do sea.
          </p>
        </div>
        <h3>Read More</h3>
      </div>
    </>
  );
}


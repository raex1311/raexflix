// components/Card.js
import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import NavLink from '../ui/NavLink'


const MyCard = ({ title, description, playerID ,imageSrc}) => {
  return (
      <Card
          isFooterBlurred
          radius="lg"
          className="border-none py-4 px-4 bg-gray-400 hover:bg-gray-600 items-center my-4 mx-4 w-250"
      >
          <Image
              alt="Woman listing to music"
              className="object-cover"
              height={250}
              //src="/images/logo.png"
              src = {imageSrc}
              width={250}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 mr-1 z-10">
              <p className="text-tiny text-black/70">{title}</p>
              <NavLink href={`/player/${playerID}`}>
                  <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                      Play
                  </Button>
              </NavLink>
          </CardFooter>
      </Card>
  );
};

export default MyCard;

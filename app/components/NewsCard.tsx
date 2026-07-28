import Image from "next/image";
import React from "react";

type News = {
    Image: string[];
    title: string;
    description: string;
    date: string;
    Type: "News";
    Id: number;
}


export const NewsCard = ({ news }: { news: News }) => {
  return (
    <a href={`/news/${news.Id}`} className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <Image
          src={news.Image[0]}
          alt={news.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          style={{
            transformOrigin: "center",
            backfaceVisibility: "hidden",
          }}
        />

        <div className="absolute -bottom-px left-0 w-full h-24 bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none" />
      </div>
      <div className="flex flex-col p-6 flex-1">
        <p className="text-sm text-gray-500 mb-2 transition-colors duration-300 group-hover:text-khuns-green">
          {news.date}
        </p>

        <h3 className="text-xl sm:text-[25px] font-bold text-black line-clamp-2 transition-colors duration-300 group-hover:text-khuns-green">
          {news.title}
        </h3>

        <p className="text-gray-600 mt-3 line-clamp-3 flex-1 transition-colors duration-300 group-hover:text-khuns-green">
          {news.description}
        </p>

        <button className="mt-4 self-start bg-khuns-green text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 hover:bg-khuns-green/90">
          Read More →
        </button>
      </div>
    </a>
  );
};

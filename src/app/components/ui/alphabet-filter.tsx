"use client";
import Link from "next/link";

interface AlphabetFilterProps {
  activeLetter: string;
}

export default function AlphabetFilter({ activeLetter }: AlphabetFilterProps) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0-9",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      {alphabet.map((letter) => (
        <Link
          key={letter}
          href={`/stores?letter=${letter}`}
          className={`px-2 py-1 ${
            activeLetter === letter
              ? "font-bold text-orange-600"
              : "text-gray-700 hover:text-orange-500"
          }`}
        >
          {letter}
        </Link>
      ))}
    </div>
  );
}

import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  // Array of GIF filenames in the /public/think folder
  const gifFilenames = [
   
    "1.svg",
    "2.svg",
    "3.svg",
    "4.svg",
    "5.svg",
    "6.svg",
    "7.svg",
    "8.svg",
    "9.svg",
    "10.svg",
    "11.svg",
    "12.svg",
    "13.svg",
    "14.svg",
    "15.svg",
    "16.svg",
    "17.svg",
    "18.svg",
    "19.svg",
    "20.svg",
    "21.svg",
    "22.svg",
    "23.svg",
    "24.svg",
    "25.svg",
    "26.svg",
    "27.svg",
    "28.svg",
    "29.svg",
    // Add more filenames here as needed
  ];

  // Select a random GIF filename from the array
  const randomGifFilename = gifFilenames[Math.floor(Math.random() * gifFilenames.length)];

  // Construct the path to the selected GIF
  const gifPath = `/think/${randomGifFilename}`;

  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        {/* Use the selected GIF as the source */}
        <Image src={gifPath} fill alt="Empty" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
};

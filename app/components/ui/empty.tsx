import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  // Array of GIF filenames in the /public/think folder
  const gifFilenames = [
    "1.gif",
    "2.gif",
    
    "4.gif",
    "5.gif",
    
   
    "9.gif",
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

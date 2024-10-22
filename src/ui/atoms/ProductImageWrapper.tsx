import NextImage, { type ImageProps } from "next/image";

export const ProductImageWrapper = (props: ImageProps) => {
  return (
    <div className="aspect-square overflow-hidden rounded-md bg-blue-50">
      <NextImage
        {...props}
        className="h-full w-full object-contain object-center p-2 transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </div>
  );
};

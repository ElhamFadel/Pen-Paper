import Image from 'next/image';

interface AritcleItemProps {
  image: string;
  title: string;
  date: string;
  excerpt: string;
  author: Author;
}
interface Author {
  name: string;
  title: string;
  avater?: string;
}

const AritcleItem: React.FC<AritcleItemProps> = ({
  image,
  title,
  date,
  excerpt,
  author,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg flex flex-row overflow-hidden my-3 p-2 shadow-md h-52 cursor-pointer ">
        <div className="relative w-1/3">
          <Image
            src={image}
            alt={title}
            fill
            objectFit="cover"
            className="rounded-sm h-full"
          />
        </div>
        <div className="p-1 px-3 w-2/3">
          <div className="text-gray-500 text-sm mb-1">{date}</div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="text-gray-700 mb-3 h-16 overflow-hidden">
            {excerpt}
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
              <Image
                src={
                  'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                }
                alt={author.title}
                width={40}
                height={40}
                layout="responsive"
              />
            </div>
            <div>
              <div className="text-gray-900 font-bold">{author.name}</div>
              <div className="text-gray-500 text-sm">{author.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AritcleItem;

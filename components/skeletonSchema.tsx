import { Skeleton } from "@/components/ui/skeleton";

type SkeletonSchemaProps = {
  grid: number;
};

const SkeletonSchema = ({ grid }: SkeletonSchemaProps) => {
  return (
    <div
      className="grid gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {Array.from({ length: grid }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 p-4 rounded-lg shadow-md bg-muted"
        >
          <Skeleton className="h-[150px] w-[100%] max-w-[250px] rounded-lg" />

          <div className="w-full space-y-2">
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonSchema;
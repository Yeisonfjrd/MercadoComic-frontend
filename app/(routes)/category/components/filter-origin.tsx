import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void;
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props;
    const { result, loading }: FilterTypes = useGetProductField()

    return (
        <div className="my-5 p-4 bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <p className="mb-3 font-bold text-[hsl(var(--primary))]">Origen</p>
            {loading && result === null && (
                <p className="text-[hsl(var(--muted-foreground))]">Cargando origen...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2 mb-2">
                        <RadioGroupItem 
                            value={origin} 
                            id={origin} 
                            className="transition-all duration-300 hover:ring-2 hover:ring-[hsl(var(--primary))] focus:ring-2 focus:ring-[hsl(var(--primary))]"
                        />
                        <Label 
                            htmlFor={origin} 
                            className="text-[hsl(var(--foreground))] dark:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:text-[hsl(var(--primary))]">
                            {origin}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;
"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxWithText } from "@/components/check-list";
import { UpdateStatusFirst } from "@/function/details";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  Data: any;
};

export function AccordionDemo({ Data }: Props) {
  return (
    <div>
      {Data ? (
        Data.map((data: any, index: number) => (
          <div key={index}>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="1">
                <AccordionTrigger className="text-[15px] font-semibold">
                  {data.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="items-center flex justify-between space-x-2">
                    <div className="flex gap-4 items-center leading-none">
                      <Checkbox
                        onClick={async () => {
                          await UpdateStatusFirst(data.id);
                        }}
                        checked={data.status}
                      />
                      <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {data.description}
                      </span>
                    </div>
                    <div className="grid gap-1.5 leading-none">
                      <span>{data.time}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))
      ) : (
        <p>Failed to fetch topics.</p>
      )}
    </div>
  );
}

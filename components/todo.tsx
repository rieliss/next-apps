import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxWithText } from "@/components/check-list";

type Props = {
  NameList: string;
  Topic: string;
  Description: string;
  Time: string;
};

export function AccordionDemo({ NameList, Topic, Description, Time }: Props) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="1">
        <AccordionTrigger className="text-[15px] font-semibold">
          {NameList}
        </AccordionTrigger>
        <AccordionContent>
          <CheckboxWithText
            Topic={Topic}
            Description={Description}
            Time={Time}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

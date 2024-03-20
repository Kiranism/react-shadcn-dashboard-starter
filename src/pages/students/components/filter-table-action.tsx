import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem
} from '@/components/ui/select';
import { SelectTrigger } from '@radix-ui/react-select';
import { ArrowUpIcon } from 'lucide-react';
import React from 'react';
import FilterIcon from '../../../assets/png/FilterIcon.png';
const tasks = {
  priority: {
    enumValues: ['Low', 'Medium', 'High']
  }
};
export default function FilterTableAction() {
  return (
    <Select onValueChange={(value) => console.log('value,', value)}>
      <SelectTrigger asChild>
        <Button className=" flex items-center gap-2 data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
          <img src={FilterIcon} alt="icon" /> Filter
        </Button>
      </SelectTrigger>
      <SelectContent align="center">
        <SelectGroup>
          {tasks.priority.enumValues.map((priority) => (
            <SelectItem key={priority} value={priority} className="capitalize">
              {priority}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

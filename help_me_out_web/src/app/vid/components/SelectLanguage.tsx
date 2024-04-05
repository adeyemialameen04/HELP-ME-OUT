import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectLanguage = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Change Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="chinese">Chinese</SelectItem>
          <SelectItem value="japanese">Japanese</SelectItem>
          <SelectItem value="french">French</SelectItem>
          <SelectItem value="spanish">Spanish</SelectItem>
          <SelectItem value="portuguese">Portuguese</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectLanguage;

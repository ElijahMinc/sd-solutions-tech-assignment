import { Select, SelectValue } from './config/select.config';
import { SelectTrigger } from './components/SelectTrigger';
import { SelectContent } from './components/SelectContent';
import { SelectItem } from './components/SelectItem';

export const BaseSelect = ({
  data = [],
  currentValue = '',
  currentPlaceholder = '',
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] mt-3">
        <SelectValue placeholder={currentPlaceholder} value={currentValue} />
      </SelectTrigger>
      <SelectContent>
        {!!data.length &&
          data.map(({ title, value }, idx) => (
            <SelectItem key={idx} value={value}>
              {title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

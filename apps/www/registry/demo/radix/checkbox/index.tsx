import { Label } from '@workspace/ui/components/ui/label';
import { Checkbox } from '@/registry/radix/checkbox';

export const RadixCheckboxDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox defaultChecked id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
};

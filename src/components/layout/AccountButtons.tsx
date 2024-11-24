import { accountButtons } from "@/constants";
import Button from "../ui/Button";

export default function AccountButtons() {
  return (
    <>
      {accountButtons.map((item) => (
        <Button className=" capitalize" key={item.label} variant={item.variant}>
          {item.label}
        </Button>
      ))}
    </>
  );
}

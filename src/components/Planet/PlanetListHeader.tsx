import Logo from "@/assets/logo.png";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

type PlanetListProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  goToPage(page: number): void;
  searchTerm: string;
};

const PlanetListHeader = (props: PlanetListProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Link
        to="/"
        onClick={() => {
          props.goToPage(1);
          props.setSearchTerm("");
        }}
      >
        <img className=" max-h-50 overflow-hidden" src={Logo} alt="Logo" />
      </Link>
      <Input
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          const searchTerm = e.currentTarget.value;
          props.setSearchTerm(searchTerm);
        }}
        value={props.searchTerm}
      />
    </div>
  );
};

export default PlanetListHeader;

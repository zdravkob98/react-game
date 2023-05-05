import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platfrom: Platform) => void;
  selectedPlatfromId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfromId }: Props) => {
  const { data, error } = usePlatform();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatfromId
  );

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

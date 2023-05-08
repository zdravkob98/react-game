import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const { data, error } = usePlatform();
  const selectedPlatfromId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatfromId = useGameQueryStore((s) => s.setPlatformId);

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
            onClick={() => setSelectedPlatfromId(platform.id)}
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

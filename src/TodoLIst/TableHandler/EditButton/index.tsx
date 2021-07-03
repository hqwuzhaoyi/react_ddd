import { Button, Input, Modal } from "antd";
import React, { useContext } from "react";
import { TableHandlerService } from "../useTableHandlerService";

export default function EditButton() {
  const tableHandlerService = useContext(TableHandlerService);
  return (
    <Button
      type='primary'
      onClick={() => {
        Modal.confirm({
          title: "编辑: " + tableHandlerService.title,
          content: (
            <Input
              defaultValue={tableHandlerService.currentItem.description}
              onInput={(e: any) => {
                tableHandlerService.setCurrentItemWithDescription(
                  e.target.value
                );
              }}
            />
          ),
        });
      }}
    >
      编辑
    </Button>
  );
}

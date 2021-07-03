import { Button } from "antd";
import React, { useContext } from "react";
import { TableHandlerService } from "./useTableHandlerService";

export default function DeleteButton() {
  const tableHandlerService = useContext(TableHandlerService);
  return (
    <Button
      type='primary'
      onClick={tableHandlerService.deleteCurrentItem}
      danger
    >
      删除
    </Button>
  );
}

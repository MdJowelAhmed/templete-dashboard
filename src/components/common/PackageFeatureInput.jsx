import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const FeaturedInput = ({ value = [], onChange }) => {
  return (
    <Form.List name="features" initialValue={["", ""]}>
      {(fields, { add, remove }) => (
        <>
          {fields.map((field, index) => (
            <div key={field.key} className="flex items-start gap-2 w-full ">
              <Form.Item
                {...field}
                className="w-full"
                validateTrigger={["onChange", "onBlur"]}
                rules={[{ required: true, message: "Feature is required" }]}
              >
                <Input
                  placeholder="Feature name"
                  className="w-full"
                  value={value[index] || ""}
                  onChange={(e) => {
                    const newValues = [...value];
                    newValues[index] = e.target.value;
                    onChange(newValues);
                  }}
                />
              </Form.Item>

              {fields.length > 2 && (
                <MinusCircleOutlined
                  className="text-red-500 text-lg cursor-pointer"
                  onClick={() => {
                    const newValues = value.filter((_, i) => i !== index);
                    onChange(newValues);
                    remove(field.name);
                  }}
                />
              )}
            </div>
          ))}

          <Form.Item className="w-full flex justify-start">
            <Button
              type="dashed"
              onClick={() => {
                onChange([...value, ""]);
                add();
              }}
              icon={<PlusOutlined />}
              className="w-full"
            >
              Add Feature
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
  );
};

export default FeaturedInput;

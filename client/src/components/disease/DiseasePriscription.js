import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Radio,
  Checkbox,
  Divider,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const { Paragraph } = Typography;

const DiseasePriscription = ({ diseaseList, setDiseaseList }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (diseaseList.length > 0) {
      form.setFieldsValue({
        diseases: diseaseList,
      });
    }
  }, [form, diseaseList]);

  const onFinish = (values) => {
    console.log("Received values of form:", values);
    setDiseaseList(values.diseases);
    navigate("/disease-list");
  };

  const formItemLayout = {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 24,
    },
  };

  return (
    <div className="row center">
      <div className="sub-container">
        <Form
          form={form}
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          autoComplete="off"
          {...formItemLayout}
          initialValues={{
            diseases: [{}],
          }}
        >
          <Form.List name="diseases">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    direction="vertical"
                  >
                    <div
                      style={{
                        border: "1px solid #D9D9D9",
                        padding: "20px",
                        marginTop: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      <Row gutter={8}>
                        <Col span={24}>
                          <Row justify="center">
                            <Space direction="vertical">
                              <Row justify="center">
                                <Col span={16}>
                                  <Row justify="center">
                                    <h1>Pain & Functional Description</h1>
                                  </Row>

                                  <Paragraph>
                                    A prescription, often abbreviated ℞ or Rx,
                                    is a formal communication from a physician
                                    or other registered health-care professional
                                    to a pharmacist, authorizing them to
                                    dispense a specific prescription drug for a
                                    specific patient. Historically, it was a
                                    physician's instruction to an apothecary
                                    listing the materials to be compounded
                                  </Paragraph>
                                </Col>
                              </Row>
                            </Space>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Paragraph>
                                A prescription, often abbreviated ℞ or Rx, is a
                                formal communication from a physician or other
                                registered health-care professional to a
                                pharmacist, authorizing them to dispense a
                                specific prescription drug for a specific
                                patient.
                              </Paragraph>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                {...restField}
                                name={[name, "discription"]}
                              >
                                <Input.TextArea />
                              </Form.Item>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Form.Item
                                label="Have you been diagnosed with this problem?"
                                {...restField}
                                name={[name, "old_disease"]}
                              >
                                <Radio.Group>
                                  <Radio value="Not Relavant">
                                    Not Relavant
                                  </Radio>
                                  <Radio value="YES">Yes</Radio>
                                  <Radio value="No">No</Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                name={[name, "after_physical_trauma"]}
                                label="Did the problem start after the physical trauma?"
                              >
                                <Radio.Group>
                                  <Radio value="Not Relavant">
                                    Not Relavant
                                  </Radio>
                                  <Radio value="YES">Yes</Radio>
                                  <Radio value="No">No</Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                name={[name, "after_mental_trauma"]}
                                label="Did the problem start after the mental trauma?"
                              >
                                <Radio.Group>
                                  <Radio value="Not Relavant">
                                    Not Relavant
                                  </Radio>
                                  <Radio value="YES">Yes</Radio>
                                  <Radio value="No">No</Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                name={[name, "frequency_of_problem"]}
                                label="How often do you experience the problem?"
                              >
                                <Radio.Group>
                                  <Radio value="Not Relavant">
                                    Not Relavant
                                  </Radio>
                                  <Radio value="Daily">Daily</Radio>
                                  <Radio value="Several times / week">
                                    Several times / week
                                  </Radio>
                                  <Radio value="A few times / month">
                                    A few times / month
                                  </Radio>
                                  <Radio value="A few times / year">
                                    A few times / year
                                  </Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                          <Form.Item
                            name={[name, "when_problem_occurs"]}
                            label="When do you experience the problem"
                          >
                            <Checkbox.Group>
                              <Row>
                                <Col span={24}>
                                  <Checkbox
                                    value="Not relevant"
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    Not relevant
                                  </Checkbox>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24}>
                                  <Checkbox
                                    value="When lying down"
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    When lying down
                                  </Checkbox>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24}>
                                  <Checkbox
                                    value="When sitting"
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    When sitting
                                  </Checkbox>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24}>
                                  <Checkbox
                                    value="Under Standing"
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    Under Standing
                                  </Checkbox>
                                </Col>
                              </Row>
                              <Row>
                                <Col span={24}>
                                  <Checkbox
                                    value="In walking"
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    In walking
                                  </Checkbox>
                                </Col>
                              </Row>
                            </Checkbox.Group>
                          </Form.Item>
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                name={[name, "intensity_of_problem"]}
                                label="Have intense is the experience of the problem on average on a 0-10 scale?"
                              >
                                <Radio.Group>
                                  <Radio value="1">1</Radio>
                                  <Radio value="2">2</Radio>
                                  <Radio value="3">3</Radio>
                                  <Radio value="4">4</Radio>
                                  <Radio value="5">5</Radio>
                                  <Radio value="6">6</Radio>
                                  <Radio value="7">7</Radio>
                                  <Radio value="8">8</Radio>
                                  <Radio value="9">9</Radio>
                                  <Radio value="10">10</Radio>
                                </Radio.Group>
                              </Form.Item>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>

                    {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
                  </Space>
                ))}
                <Form.Item>
                  <Divider>
                    <Button
                      size="small"
                      type="primary"
                      shape="round"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Divider>
                </Form.Item>
              </>
            )}
          </Form.List>

          <div style={{ marginBottom: "10px", padding: "20px" }}>
            <Row justify="center">
              <Space direction="horizontal" align="baseline">
                <Button size="large" type="primary">
                  Back
                </Button>
                <Form.Item>
                  <Button size="large" type="primary" htmlType="submit">
                    Next
                  </Button>
                </Form.Item>
              </Space>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DiseasePriscription;

import React, { useState } from 'react';
import { List, Divider, Form, Input, Button, notification } from 'antd';
import { utils } from 'ethers';

import { useTokenFactory } from '../../hooks/useTokenFactory';
import { useERC20Multicall } from '../../hooks/useERC20Multicall';

function Mint() {
  const [form] = Form.useForm();
  const [tokenList, setTokenList] = useState<string[]>([]);

  const { mint, list } = useTokenFactory();
  const { tokenData } = useERC20Multicall(tokenList);

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const { name, symbol, initialBalance } = values;

    notification.success({
      message: 'Notification',
      description: '发布 Token',
    });

    const mintToken = await mint(name, symbol, initialBalance);

    notification.success({
      message: 'Notification',
      description: `${mintToken.hash}`,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const fetchTokenList = async () => {
    const result = await list();
    setTokenList(result);
  };

  return (
    <>
      <Divider orientation="left">Mint token</Divider>
      <Form
        name="mint"
        form={form}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 23 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Symbol"
          name="symbol"
          rules={[{ required: true, message: 'Please input symbol!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="InitialBalance"
          name="initialBalance"
          rules={[{ required: true, message: 'Please input initialBalance!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Mint
          </Button>
        </Form.Item>
      </Form>
      <Divider orientation="left">Token contractt list</Divider>
      <Button onClick={() => fetchTokenList()}>List</Button>
      <br />
      <br />
      <List
        bordered
        dataSource={tokenData}
        renderItem={(item) => (
          <List.Item>
            <span>Address: {item.address}</span>
            <span>Name: {item.data.name}</span>
            <span>Symbol: {item.data.symbol}</span>
            <span>Decimals: {item.data.decimals}</span>
            <span>
              TotalSupply:{' '}
              {utils.formatUnits(item.data.totalSupply, item.data.decimals)}
            </span>
            <span>
              BalanceOf:{' '}
              {utils.formatUnits(item.data.balanceOf, item.data.decimals)}
            </span>
          </List.Item>
        )}
      />
    </>
  );
}

export default Mint;

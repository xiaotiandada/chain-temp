import { Button, Page, Text } from '@geist-ui/core'
import { Plus } from '@geist-ui/icons'

const ERC20UnlockContent = () => {
  return (
    <Page>
      <Text h1>ERC20 Unlock content</Text>
      <Button auto type="success-light">
        Post Snippet
        <Plus />
      </Button>
    </Page>
  )
}

export default ERC20UnlockContent
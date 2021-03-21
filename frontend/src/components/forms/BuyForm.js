import {Box, Flex, Image} from "rebass";
import {
  Label,
  Input,
  Select,
} from '@rebass/forms'
import {FormButton} from "../Button";
import {connect} from "react-redux";
import {connectWallet} from "../../redux/actions/metaData";

const crankThatPicture = <Image
    src={process.env.PUBLIC_URL + "/crankthat.jpg"}
    sx={{
        width: '100%',
        borderRadius: 16,
    }}
/>;

const BuyForm = ({connectWallet, metaData}) => {
  return (
    <Box
      as='form'
      onSubmit={e => e.preventDefault()}
      py={3}>

      <Flex mx={-2} mb={3}>
        <Box width={1 / 3} px={2}>

          {crankThatPicture}
        </Box>
        <Box width={2 / 3} px={2}>
          <Box sx={{display:'flex', alignItems: 'center', justifyContent:'space-between'}}>
            <Label htmlFor='amount'>$CRANK Amount</Label>
            <Input
              id='amount'
              name='amount'
              defaultValue='1'
              width={100}
              type="text" //if we do number then user cant enter decimals :(
              textAlign="right"
            />
          </Box>
          <Box sx={{display:'flex', alignItems: 'center', justifyContent:'space-between', marginTop:20}}>
            <span>Cost USDC</span>
            $2,000
          </Box>
        </Box>
      </Flex>
      <Flex mx={-2} mb={3}>
        <Box width={1} px={2}>

        </Box>
      </Flex>
      <FormButton onClick={!metaData.userAddress && (() => {connectWallet(metaData.web3Modal)})}>
        {metaData.userAddress ? "BUY" : "CONNECT WALLET"}
      </FormButton>
    </Box>
  )
}

const mapStateToProps = (state) => {
    return {
        metaData: state.metaData
    }
}

export default connect(mapStateToProps, {connectWallet})(BuyForm);

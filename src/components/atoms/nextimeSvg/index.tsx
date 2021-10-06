import React from 'react'

import { Box } from '@chakra-ui/layout'

type Props = {
    size?: number
    color?: string
}

const NextimeSvg = ({
  size = 1.5,
  color = 'white'
}: Props) => {
  const height = `${size}rem`
  const width = `${4 * size}rem`
  return (
    <svg
      width={width}
      height={height}
      // fill={'white'}
      viewBox="0 0 105.83333 26.458334"
      version="1.1"
      id="svg8"
    >
      <defs
        id="defs2" />
      <g
        id="layer1"
        transform="translate(0,-270.54165)">
        <path
          d="m 16.679607,296.84006 c -0.555798,-0.19348 -0.820647,-0.35148 -1.01392,-0.60487 -0.321208,-0.42113 -0.07348,-0.93032 0.94146,-1.93514 l 0.596978,-0.59103 0.02888,-0.39348 c 0.03521,-0.47962 0.205565,-0.86376 0.522318,-1.17778 0.12668,-0.12559 1.136471,-1.06377 2.243974,-2.08484 l 2.01364,-1.8565 -0.03461,-2.42644 -0.0346,-2.42643 6.818455,-6.37788 c 3.750149,-3.50784 6.851123,-6.3976 6.891056,-6.42172 0.05896,-0.0356 0.0674,0.32912 0.04489,1.94089 -0.01524,1.0916 -0.04225,2.32068 -0.06002,2.7313 l -0.03231,0.74658 -4.551043,4.31627 -4.551037,4.31626 -0.0022,1.01297 c -0.004,1.86692 -0.154056,9.99227 -0.185116,10.02334 -0.01688,0.0169 -1.709459,-0.0778 -3.761287,-0.21031 -3.612211,-0.23334 -3.738627,-0.23791 -3.983752,-0.14368 -0.59884,0.23018 -1.085952,0.74526 -1.297081,1.37155 -0.06519,0.19338 -0.122799,0.35127 -0.128009,0.35086 -0.0052,-5.6e-4 -0.215224,-0.0724 -0.466696,-0.15992 z m 10.238123,-2.62503 c 0.0206,-0.74208 0.05355,-1.86211 0.07323,-2.48896 l 0.03576,-1.13973 4.898136,-4.67526 c 4.40083,-4.20059 4.901742,-4.66176 4.933629,-4.54228 0.0258,0.0966 0.193531,3.82006 0.193531,4.29603 0,0.031 -1.177191,1.19506 -2.615979,2.58695 -1.438788,1.39188 -3.727431,3.6066 -5.085872,4.92158 l -2.469895,2.39089 z M 4.3944764,283.54828 c 0,-5.35293 0.014153,-6.69053 0.070322,-6.6468 1.4808909,1.15288 10.9088896,8.39767 10.9282986,8.39767 0.01533,0 0.02787,-1.91135 0.02787,-4.24745 v -4.24744 h 1.209539 1.209538 v 6.72597 c 0,6.48791 -0.0036,6.72337 -0.102147,6.65246 -0.05619,-0.0404 -2.522995,-1.94056 -5.481814,-4.22251 -2.9588148,-2.28195 -5.3938083,-4.149 -5.4110961,-4.149 -0.017289,0 -0.031436,1.8987 -0.031436,4.21932 v 4.21932 H 5.6040105 4.3944717 Z m 33.6983026,6.66966 c 0,-0.0175 0.502042,-0.68209 1.11565,-1.47676 0.613601,-0.79469 1.764503,-2.28588 2.557549,-3.31378 l 1.441899,-1.86889 -2.585678,-3.35044 c -1.422124,-1.84273 -2.585678,-3.36244 -2.585678,-3.37712 0,-0.0147 0.677201,-0.0266 1.504891,-0.0265 h 1.504891 l 1.823005,2.36259 c 1.002651,1.29942 1.842779,2.36259 1.866954,2.36259 0.02417,0 0.862012,-1.06238 1.861867,-2.36085 l 1.81792,-2.36085 1.504892,-0.002 c 0.82769,-10e-4 1.504888,0.0124 1.504888,0.03 0,0.0176 -1.150864,1.52084 -2.557469,3.34056 -1.406609,1.81974 -2.564812,3.33145 -2.573786,3.35935 -0.01297,0.0403 4.165908,5.50499 4.951166,6.47458 l 0.193644,0.2391 -1.539792,-0.003 -1.539801,-0.003 -1.792069,-2.33172 c -0.985634,-1.28245 -1.810251,-2.33172 -1.832479,-2.33172 -0.02223,0 -0.848674,1.05014 -1.836546,2.33363 l -1.796136,2.33363 -1.504892,10e-4 c -0.827689,5.6e-4 -1.50489,-0.0133 -1.50489,-0.0308 z m 20.308995,-5.48137 v -5.51324 h -2.756625 -2.756625 v -1.20954 -1.20953 h 6.722786 6.722785 v 1.20953 1.20954 H 63.57747 60.820846 v 5.51324 5.51325 H 59.61131 58.401774 Z m 9.901335,-1.20953 v -6.72278 h 1.181409 1.181403 v 6.72278 6.72278 h -1.181403 -1.181409 z m 4.275575,-0.007 c 0,-5.37494 0.01415,-6.71884 0.07032,-6.67585 0.03867,0.0296 1.556851,1.19809 3.373719,2.59663 l 3.3034,2.54282 3.322051,-2.56162 c 1.827127,-1.40889 3.334203,-2.56163 3.349067,-2.56163 0.01488,0 0.02704,3.0126 0.02704,6.69466 v 6.69465 H 84.84287 83.661459 v -4.24744 c 0,-2.3361 -0.019,-4.24687 -0.04219,-4.24615 -0.02319,6.7e-4 -0.991542,0.73455 -2.151856,1.63075 -1.160308,0.89618 -2.123025,1.62976 -2.139358,1.63016 -0.01634,5.6e-4 -0.978345,-0.73247 -2.137789,-1.62861 -1.159457,-0.89614 -2.127078,-1.6303 -2.150281,-1.63147 -0.02319,-10e-4 -0.04219,1.90922 -0.04219,4.24532 v 4.24744 h -1.209538 -1.209544 z m 18.143763,6.63886 c -0.633543,-0.15316 -1.137052,-0.44843 -1.662487,-0.97493 -0.535868,-0.53693 -0.769127,-0.92423 -0.950199,-1.57764 -0.11232,-0.40534 -0.116467,-0.5505 -0.115663,-4.05015 6.65e-4,-3.0147 0.01502,-3.68991 0.08455,-3.98483 0.237007,-1.00533 0.966007,-1.91233 1.911767,-2.37859 0.803532,-0.39613 0.646766,-0.38656 6.343047,-0.38764 l 5.105378,-6.7e-4 v 1.20954 1.20953 l -5.049118,10e-4 c -5.684966,0.001 -5.287226,-0.0289 -5.704833,0.43431 -0.263598,0.29237 -0.342323,0.64342 -0.318655,1.42095 l 0.01801,0.59071 4.317771,0.0144 4.317765,0.0144 v 1.18072 1.1807 l -4.317765,0.0144 -4.317771,0.0144 v 1.40645 c 0,1.36805 0.0033,1.41387 0.134048,1.67872 0.163351,0.33181 0.47693,0.5706 0.856084,0.65192 0.18785,0.0403 1.905095,0.0603 5.172846,0.0603 h 4.891638 v 1.18141 1.18141 l -5.189761,-0.005 c -4.324981,-0.004 -5.245897,-0.0183 -5.526625,-0.0861 z m -63.747835,-0.51397 c 0.01638,-0.0851 0.04671,-1.0281 0.0674,-2.09559 0.02069,-1.06749 0.0536,-2.14554 0.07314,-2.39568 l 0.03553,-0.4548 2.524807,-2.35808 c 1.38864,-1.29695 2.546843,-2.36653 2.573785,-2.37684 0.02694,-0.0103 0.04898,0.10268 0.04898,0.2511 0,0.14841 0.03938,1.20515 0.08752,2.34829 0.07199,1.70951 0.07449,2.0904 0.01407,2.1458 -0.0404,0.037 -1.269352,1.19756 -2.731008,2.57893 -1.461651,1.38137 -2.6725,2.51158 -2.690767,2.51158 -0.01827,0 -0.01982,-0.0696 -0.0035,-0.15471 z"
          id="path4494"
        />
      </g>
    </svg>
  )
}

export default NextimeSvg

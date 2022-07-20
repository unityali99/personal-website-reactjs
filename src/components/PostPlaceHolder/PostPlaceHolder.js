import {TextBlock} from 'react-placeholder/lib/placeholders';
import 'react-bootstrap/dist/react-bootstrap';

const PostPlaceHolder = () => (
  <div>
    {new Array(10).fill(0).map((val,index) =>
      (<div key={index} className='my-awesome-placeholder px-3 my-3'>
        <TextBlock style={{margin: "2rem 0"}} showLoadingAnimation rows={4} color='gray'/>
      </div>))}
  </div>
);

export default PostPlaceHolder;
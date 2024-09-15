import styles from './PostsTamplate.module.css'

import { Link } from 'react-router-dom';

interface PostsTamplateProps  {
    titulo : string,
    descricao: string,
    data: string,
    link: string,
    id: number
}

const PostsTamplate : React.FC<PostsTamplateProps> = (props) =>{
    return(<>
     <aside className="bg-black text-white p-6  w-full  font-mono">
     <Link className={styles.link} to={`${props.link}`}>
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">bash</p>
            </div>
            <div className="mt-4">
                <p className="text-green-400">$ {props.titulo}</p>
                <p className="text-white">{props.descricao}</p>
                <p className="text-white">Date : {props.data}</p>
                <p className="text-green-400">$</p>
            </div>
        </Link>
        </aside>
        <hr/>
        </>)
}

export default PostsTamplate;
import Link from 'next/link'
import React from 'react'
import {env_Image} from '/env'

const FollowingSection = ({data, darkMode, userData, followListMemberBtn, isBlock=false}) => {
  return (
    <>

    <div class="member-hub" dark-mode={darkMode ? "true" : "false"}>

    {data.length == 0 ? 
        <div className='empty-panel'>
            <div>
                <svg viewBox="0 0 20 20"><path d="M 10 0 L 9.6054688 0.015625 L 9.2148438 0.0625 L 8.828125 0.13867188 L 8.4492188 0.24414062 L 8.078125 0.38085938 L 7.7207031 0.54492188 L 7.3769531 0.73632812 L 7.0488281 0.95507812 L 6.7382812 1.1972656 L 6.4492188 1.4648438 L 6.1816406 1.7539062 L 5.9375 2.0605469 L 5.71875 2.3867188 L 5.5253906 2.7304688 L 5.359375 3.0859375 L 5.2246094 3.4550781 L 5.1171875 3.8339844 L 5.0390625 4.21875 L 4.9941406 4.609375 L 4.9785156 5 L 4.9941406 5.6132812 L 5.0371094 6.2246094 L 5.1132812 6.8320312 L 5.21875 7.4355469 L 5.3535156 8.0332031 L 5.5175781 8.625 L 5.7089844 9.2050781 L 5.9296875 9.7773438 L 6.1796875 10.335938 L 6.4550781 10.884766 L 6.6386719 11.193359 L 6.8476562 11.484375 L 6.9101562 11.582031 L 6.9472656 11.689453 L 6.9570312 11.804688 L 6.9414062 11.919922 L 6.8984375 12.025391 L 6.8359375 12.121094 L 6.75 12.197266 L 6.6484375 12.253906 L 6.5390625 12.287109 L 5.8183594 12.419922 L 5.1054688 12.576172 L 4.3964844 12.755859 L 3.6953125 12.960938 L 3.0019531 13.191406 L 2.3164062 13.445312 L 2.0371094 13.570312 L 1.7734375 13.722656 L 1.5253906 13.902344 L 1.296875 14.103516 L 1.0917969 14.328125 L 0.91015625 14.570312 L 0.75390625 14.832031 L 0.62304688 15.107422 L 0.4453125 15.578125 L 0.29492188 16.056641 L 0.171875 16.542969 L 0.076171875 17.035156 L 0.0078125 17.53125 L 0 17.736328 L 0.01953125 17.9375 L 0.06640625 18.134766 L 0.13867188 18.324219 L 0.23632812 18.501953 L 0.35546875 18.666016 L 0.5 18.810547 L 0.65820312 18.935547 L 0.8359375 19.037109 L 1.0234375 19.117188 L 1.2207031 19.166016 L 2.3789062 19.375 L 3.5429688 19.552734 L 4.7109375 19.701172 L 5.8828125 19.820312 L 7.0566406 19.910156 L 8.234375 19.970703 L 9.4121094 20 L 10.587891 20 L 11.765625 19.970703 L 12.943359 19.910156 L 14.117188 19.820312 L 15.289062 19.701172 L 16.457031 19.552734 L 17.619141 19.375 L 18.779297 19.166016 L 18.976562 19.117188 L 19.164062 19.037109 L 19.339844 18.935547 L 19.5 18.810547 L 19.642578 18.666016 L 19.763672 18.501953 L 19.861328 18.324219 L 19.933594 18.134766 L 19.980469 17.9375 L 20 17.736328 L 19.992188 17.53125 L 19.923828 17.035156 L 19.828125 16.542969 L 19.705078 16.056641 L 19.554688 15.578125 L 19.376953 15.107422 L 19.248047 14.832031 L 19.089844 14.570312 L 18.908203 14.328125 L 18.703125 14.103516 L 18.474609 13.902344 L 18.226562 13.722656 L 17.962891 13.570312 L 17.683594 13.445312 L 16.998047 13.191406 L 16.304688 12.960938 L 15.603516 12.755859 L 14.896484 12.576172 L 14.183594 12.419922 L 13.462891 12.287109 L 13.351562 12.253906 L 13.25 12.197266 L 13.166016 12.121094 L 13.101562 12.025391 L 13.060547 11.919922 L 13.042969 11.804688 L 13.054688 11.689453 L 13.091797 11.582031 L 13.152344 11.484375 L 13.363281 11.193359 L 13.546875 10.884766 L 13.822266 10.335938 L 14.070312 9.7773438 L 14.291016 9.2050781 L 14.484375 8.625 L 14.648438 8.0332031 L 14.783203 7.4355469 L 14.886719 6.8320312 L 14.962891 6.2246094 L 15.007812 5.6132812 L 15.021484 5 L 15.007812 4.609375 L 14.960938 4.21875 L 14.882812 3.8339844 L 14.777344 3.4550781 L 14.640625 3.0859375 L 14.474609 2.7304688 L 14.283203 2.3867188 L 14.064453 2.0605469 L 13.818359 1.7539062 L 13.552734 1.4648438 L 13.263672 1.1972656 L 12.953125 0.95507812 L 12.625 0.73632812 L 12.279297 0.54492188 L 11.921875 0.38085938 L 11.552734 0.24414062 L 11.173828 0.13867188 L 10.785156 0.0625 L 10.394531 0.015625 L 10 0 z M 9.9980469 1 L 10.349609 1.015625 L 10.697266 1.0625 L 11.039062 1.1367188 L 11.373047 1.2421875 L 11.697266 1.375 L 12.009766 1.5371094 L 12.304688 1.7246094 L 12.582031 1.9355469 L 12.841797 2.171875 L 13.076172 2.4296875 L 13.291016 2.7070312 L 13.480469 3 L 13.640625 3.3105469 L 13.775391 3.6328125 L 13.880859 3.9667969 L 13.957031 4.3066406 L 14.001953 4.6523438 L 14.017578 5.0019531 L 14.003906 5.5644531 L 13.962891 6.1269531 L 13.892578 6.6855469 L 13.794922 7.2402344 L 13.671875 7.7910156 L 13.521484 8.3339844 L 13.345703 8.8691406 L 13.140625 9.3945312 L 12.912109 9.9101562 L 12.658203 10.414062 L 12.521484 10.644531 L 12.363281 10.863281 L 12.236328 11.046875 L 12.142578 11.248047 L 12.076172 11.460938 L 12.041016 11.679688 L 12.041016 11.902344 L 12.074219 12.121094 L 12.138672 12.333984 L 12.234375 12.535156 L 12.359375 12.71875 L 12.507812 12.882812 L 12.681641 13.023438 L 12.875 13.136719 L 13.082031 13.220703 L 13.296875 13.273438 L 13.982422 13.400391 L 14.662109 13.548828 L 15.335938 13.720703 L 16.003906 13.916016 L 16.664062 14.134766 L 17.318359 14.376953 L 17.529297 14.472656 L 17.728516 14.59375 L 17.912109 14.736328 L 18.078125 14.898438 L 18.222656 15.078125 L 18.345703 15.277344 L 18.445312 15.484375 L 18.603516 15.902344 L 18.738281 16.328125 L 18.847656 16.761719 L 18.931641 17.197266 L 18.992188 17.640625 L 18.990234 17.763672 L 18.958984 17.884766 L 18.896484 17.990234 L 18.8125 18.082031 L 18.707031 18.146484 L 18.587891 18.185547 L 17.455078 18.388672 L 16.316406 18.5625 L 15.173828 18.708984 L 14.027344 18.826172 L 12.878906 18.912109 L 11.726562 18.970703 L 10.576172 19 L 9.421875 19 L 8.2714844 18.970703 L 7.1210938 18.912109 L 5.9726562 18.826172 L 4.8242188 18.708984 L 3.6835938 18.5625 L 2.5429688 18.388672 L 1.4101562 18.185547 L 1.2929688 18.146484 L 1.1855469 18.082031 L 1.1015625 17.990234 L 1.0410156 17.884766 L 1.0078125 17.763672 L 1.0058594 17.640625 L 1.0683594 17.197266 L 1.1523438 16.761719 L 1.2617188 16.328125 L 1.3945312 15.902344 L 1.5527344 15.484375 L 1.6542969 15.277344 L 1.7773438 15.078125 L 1.921875 14.898438 L 2.0878906 14.736328 L 2.2714844 14.59375 L 2.4707031 14.472656 L 2.6816406 14.376953 L 3.3339844 14.134766 L 3.9941406 13.916016 L 4.6621094 13.720703 L 5.3378906 13.548828 L 6.0175781 13.400391 L 6.7011719 13.273438 L 6.9179688 13.220703 L 7.125 13.136719 L 7.3183594 13.023438 L 7.4902344 12.882812 L 7.6386719 12.71875 L 7.765625 12.535156 L 7.859375 12.333984 L 7.9238281 12.121094 L 7.9570312 11.902344 L 7.9570312 11.679688 L 7.921875 11.460938 L 7.8574219 11.248047 L 7.7617188 11.046875 L 7.6367188 10.863281 L 7.4785156 10.644531 L 7.3417969 10.414062 L 7.0859375 9.9101562 L 6.8574219 9.3945312 L 6.6542969 8.8691406 L 6.4785156 8.3339844 L 6.328125 7.7910156 L 6.203125 7.2402344 L 6.1074219 6.6855469 L 6.0371094 6.1269531 L 5.9960938 5.5644531 L 5.9804688 5.0019531 L 5.9980469 4.6523438 L 6.0429688 4.3066406 L 6.1191406 3.9667969 L 6.2246094 3.6328125 L 6.359375 3.3105469 L 6.5195312 3 L 6.7089844 2.7070312 L 6.921875 2.4296875 L 7.1582031 2.171875 L 7.4179688 1.9355469 L 7.6953125 1.7246094 L 7.9902344 1.5371094 L 8.3007812 1.375 L 8.625 1.2421875 L 8.9589844 1.1367188 L 9.3027344 1.0625 L 9.6503906 1.015625 L 9.9980469 1 z "/></svg>
                <span>Không có thành viên</span>
            </div>
        </div>
    : ""}


    {data.map((ite, index) => ( 

        <Link key={index} href={"/u/"+ite.user_name}>
        <div class="item-tab member-tab set-border-box-1 set-margin-top-1px">

            <div class="content-member-tab">
                <div class="ava-item-tab">
                    <img src={env_Image(ite.thumbnail)} alt=""/>
                </div>
                <div class="content-item-tab">
                    <div class="title-item-tab set-bold set-black-white">{ite.name}</div>
                    <div class="list-in-line set-anchor-gray-color">
                        <ul>
                            <li>Bài viết: {ite.total_post ? ite.total_post : 0} </li>
                            <li>lượt thích: {ite.total_like ? ite.total_like : 0}</li>
                        </ul>
                    </div>
                </div>
            </div>

            { (ite.Member_ID != userData.id && userData.logged && (followListMemberBtn || isBlock)) ?
            <span onClick={(e) => { e.preventDefault(); followListMemberBtn(ite.exfo, ite.Member_ID, index)}}  class={ite.exfo ? "btn-member-tab un-btn-member-tab" :  "btn-member-tab"}>
                {isBlock ? 
                    <p>{ite.exfo ?  "Bỏ chặn" : "Chặn"}</p>
                :   <p>{ite.exfo ?  "Bỏ theo dõi" : "Theo dõi"}</p>
                }
            </span> : ""
            }

        </div>
        </Link>
    ))}

    </div>

    </>
  )
}

export default FollowingSection

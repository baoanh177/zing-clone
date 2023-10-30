export default function Sidebar() {
    return `
        <aside class="sidebar">
            <div class="sidebar-inner">
                <div class="sidebar-item">
                    <div class="zing-logo">
                        <img src="./assets/icon/logo-dark.svg" class="logo" alt="" />
                        <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.87/static/media/icon_zing_mp3_60.f6b51045.svg" class="logo-sm" alt="" />
                    </div>
                </div>
                <nav class="navbar-main">
                    <ul>
                        <li class="item active">
                            <a href="">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75ZM9.25 12C9.25 10.4812 10.4812 9.25 12 9.25C13.5188 9.25 14.75 10.4812 14.75 12C14.75 13.5188 13.5188 14.75 12 14.75C10.4812 14.75 9.25 13.5188 9.25 12ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75Z"
                                        fill-opacity="0.8"></path>
                                </svg>
                                <span>Khám Phá</span>
                            </a>
                        </li>
                        <li class="item">
                            <a href="">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.76078 11.5281C2.0086 6.08576 6.49865 1.75 12.0018 1.75C14.0559 1.75 15.971 2.35489 17.5759 3.39648C17.9234 3.62198 18.0222 4.08645 17.7967 4.4339C17.5712 4.78136 17.1068 4.88023 16.7593 4.65473C15.3901 3.76614 13.7574 3.25 12.0018 3.25C7.30422 3.25 3.47074 6.95138 3.25923 11.5963C3.24039 12.0101 2.88968 12.3303 2.47589 12.3114C2.06211 12.2926 1.74194 11.9419 1.76078 11.5281ZM21.5275 11.6871C21.9413 11.7057 22.2617 12.0563 22.243 12.4701C21.998 17.9149 17.5067 22.2536 12.0018 22.2536C9.89696 22.2536 7.93821 21.6184 6.30952 20.5292C5.9652 20.299 5.87274 19.8332 6.103 19.4889C6.33327 19.1446 6.79905 19.0521 7.14337 19.2824C8.53298 20.2117 10.203 20.7536 12.0018 20.7536C16.7009 20.7536 20.5354 17.0497 20.7445 12.4026C20.7632 11.9888 21.1137 11.6685 21.5275 11.6871ZM20.7535 8.05986C20.7535 7.40256 20.2207 6.86972 19.5634 6.86972C18.9061 6.86972 18.3732 7.40256 18.3732 8.05986C18.3732 8.71715 18.9061 9.25 19.5634 9.25C20.2207 9.25 20.7535 8.71715 20.7535 8.05986ZM19.5634 5.36972C21.0491 5.36972 22.2535 6.57413 22.2535 8.05986C22.2535 9.54558 21.0491 10.75 19.5634 10.75C19.1208 10.75 18.7031 10.6431 18.3349 10.4537L15.5083 14.5112C15.3814 14.6933 15.1803 14.8099 14.9592 14.8295C14.738 14.8491 14.5196 14.7698 14.3626 14.6128L13.3637 13.6139L12.2257 15.3202C12.0906 15.5227 11.8658 15.6471 11.6225 15.6538C11.3793 15.6605 11.1478 15.5488 11.0018 15.3542L9.05228 12.7558L6.78385 15.0242C6.75187 15.0562 6.71772 15.0847 6.68188 15.1097C6.80299 15.4073 6.86972 15.7328 6.86972 16.074C6.86972 17.4877 5.72363 18.6338 4.30986 18.6338C2.89609 18.6338 1.75 17.4877 1.75 16.074C1.75 14.6602 2.89609 13.5141 4.30986 13.5141C4.83856 13.5141 5.32983 13.6744 5.73772 13.949L8.60299 11.0837C8.75671 10.93 8.96957 10.8506 9.18642 10.8659C9.40327 10.8813 9.60278 10.9901 9.73324 11.164L11.5657 13.6064L12.6234 12.0207C12.748 11.8338 12.9499 11.7126 13.1735 11.6905C13.3971 11.6684 13.6188 11.7477 13.7776 11.9065L14.7897 12.9186L17.2351 9.40829C17.005 9.01185 16.8732 8.55124 16.8732 8.05986C16.8732 6.57413 18.0777 5.36972 19.5634 5.36972ZM4.30986 15.0141C4.8952 15.0141 5.36972 15.4886 5.36972 16.074C5.36972 16.6593 4.8952 17.1338 4.30986 17.1338C3.72452 17.1338 3.25 16.6593 3.25 16.074C3.25 15.4886 3.72452 15.0141 4.30986 15.0141Z"
                                        fill="#currentColor" fill-opacity="0.8"></path>
                                </svg>
                                <span>#zingchart</span>
                                <div class="play-icon">
                                    <i class="fa-regular fa-circle-play"></i>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.8722 2.67978C11.911 3.09217 11.6082 3.45794 11.1958 3.49675C6.88011 3.90291 3.5 7.54519 3.5 11.98C3.5 16.6875 7.30771 20.501 12.0014 20.501C16.6952 20.501 20.5029 16.6875 20.5029 11.98C20.5029 10.3767 20.0618 8.87895 19.2951 7.59953C19.0822 7.24422 19.1976 6.78359 19.5529 6.57068C19.9082 6.35777 20.3688 6.4732 20.5818 6.82851C21.4842 8.33451 22.0029 10.0978 22.0029 11.98C22.0029 17.513 17.5266 22.001 12.0014 22.001C6.4763 22.001 2 17.513 2 11.98C2 6.76649 5.9737 2.48158 11.0553 2.00335C11.4676 1.96454 11.8334 2.26739 11.8722 2.67978ZM11.8656 6.19339C11.9286 6.60278 11.6479 6.98576 11.2385 7.0488C8.85318 7.4161 7.02419 9.48361 7.02419 11.9799C7.02419 13.3678 7.58856 14.622 8.50124 15.527C8.79536 15.8186 8.79736 16.2935 8.50571 16.5876C8.21405 16.8818 7.73918 16.8838 7.44506 16.5921C6.25964 15.4166 5.52419 13.7835 5.52419 11.9799C5.52419 8.73441 7.90208 6.04487 11.0102 5.56627C11.4196 5.50323 11.8026 5.784 11.8656 6.19339ZM16.7493 8.68305C17.1175 8.49328 17.5698 8.63791 17.7595 9.00609C18.2192 9.89782 18.4783 10.9096 18.4783 11.9799C18.4783 15.5622 15.58 18.469 12.0013 18.469C11.5871 18.469 11.2513 18.1333 11.2513 17.719C11.2513 17.3048 11.5871 16.969 12.0013 16.969C14.7485 16.969 16.9783 14.7368 16.9783 11.9799C16.9783 11.1542 16.7788 10.3774 16.4262 9.69332C16.2365 9.32514 16.3811 8.87282 16.7493 8.68305ZM14.3787 2.2439C13.9763 2.14558 13.5704 2.39207 13.4721 2.79444C13.4513 2.87927 13.4459 2.96425 13.4541 3.04647V9.4046C13.0253 9.16142 12.5297 9.02255 12.0013 9.02255C10.3691 9.02255 9.04861 10.3481 9.04861 11.9799C9.04861 13.6117 10.3691 14.9373 12.0013 14.9373C13.6336 14.9373 14.9541 13.6117 14.9541 11.9799C14.9541 11.9479 14.9535 11.916 14.9525 11.8842C14.9536 11.8681 14.9541 11.8519 14.9541 11.8355V3.98669C15.7486 4.28167 16.4875 4.69246 17.1504 5.19895C17.4795 5.45044 17.9502 5.3875 18.2017 5.05837C18.4532 4.72924 18.3902 4.25855 18.0611 4.00706C16.9849 3.18473 15.7363 2.57565 14.3787 2.2439ZM12.0013 10.5225C11.2005 10.5225 10.5486 11.1735 10.5486 11.9799C10.5486 12.7863 11.2005 13.4373 12.0013 13.4373C12.8022 13.4373 13.4541 12.7863 13.4541 11.9799C13.4541 11.1735 12.8022 10.5225 12.0013 10.5225Z"
                                        fill-opacity="0.8"></path>
                                </svg>
                                <span>Radio</span>
                                <div class="play-icon">
                                    <i class="fa-regular fa-circle-play"></i>
                                </div>
                            </a>
                        </li>
                        <li class="item">
                            <a href="">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.5 2.75C6.08579 2.75 5.75 3.08579 5.75 3.5C5.75 3.91421 6.08579 4.25 6.5 4.25H17.5C17.9142 4.25 18.25 3.91421 18.25 3.5C18.25 3.08579 17.9142 2.75 17.5 2.75H6.5ZM3 9.5C3 7.42893 4.67893 5.75 6.75 5.75H17.25C19.3211 5.75 21 7.42893 21 9.5V17.5C21 19.5711 19.3211 21.25 17.25 21.25H6.75C4.67893 21.25 3 19.5711 3 17.5V9.5ZM6.75 7.25C5.50736 7.25 4.5 8.25736 4.5 9.5V17.5C4.5 18.7426 5.50736 19.75 6.75 19.75H17.25C18.4926 19.75 19.5 18.7426 19.5 17.5V9.5C19.5 8.25736 18.4926 7.25 17.25 7.25H6.75ZM13.666 8.87596C13.4359 8.72253 13.14 8.70823 12.8961 8.83874C12.6522 8.96926 12.5 9.2234 12.5 9.5V13.0499C12.125 12.8581 11.7001 12.75 11.25 12.75C9.73122 12.75 8.5 13.9812 8.5 15.5C8.5 17.0188 9.73122 18.25 11.25 18.25C12.6911 18.25 13.8733 17.1415 13.9905 15.7307C13.9967 15.6916 14 15.6515 14 15.6107V15.5V10.9014L15.084 11.624C15.4286 11.8538 15.8943 11.7607 16.124 11.416C16.3538 11.0714 16.2607 10.6057 15.916 10.376L13.666 8.87596ZM12.5 15.5C12.5 14.8096 11.9404 14.25 11.25 14.25C10.5596 14.25 10 14.8096 10 15.5C10 16.1904 10.5596 16.75 11.25 16.75C11.9404 16.75 12.5 16.1904 12.5 15.5Z"
                                        fill-opacity="0.8"></path>
                                </svg>
                                <span>Thư Viện</span>
                                <div class="play-icon">
                                    <i class="fa-regular fa-circle-play"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="navbar-sub">
                    <div class="scroll-menu">
                        <ul class="menu">
                            <li class="item">
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20.25 2C20.25 1.58579 19.9142 1.25 19.5 1.25C19.0858 1.25 18.75 1.58579 18.75 2C18.75 2.95195 18.4626 3.63685 18.0656 4.07478C17.6709 4.51015 17.1258 4.75 16.5 4.75C16.0858 4.75 15.75 5.08579 15.75 5.5C15.75 5.91421 16.0858 6.25 16.5 6.25C17.126 6.25 17.671 6.48996 18.0657 6.9254C18.4628 7.36341 18.75 8.04835 18.75 9C18.75 9.41421 19.0858 9.75 19.5 9.75C19.9142 9.75 20.25 9.41421 20.25 9C20.25 8.04805 20.5374 7.36315 20.9344 6.92522C21.3291 6.48985 21.8742 6.25 22.5 6.25C22.9142 6.25 23.25 5.91421 23.25 5.5C23.25 5.08579 22.9142 4.75 22.5 4.75C21.874 4.75 21.329 4.51004 20.9343 4.0746C20.5372 3.63659 20.25 2.95165 20.25 2ZM19.1769 5.08231C19.2934 4.95373 19.4013 4.81641 19.5 4.6709C19.5987 4.81629 19.7064 4.95351 19.8229 5.082C19.9625 5.23602 20.1129 5.37549 20.2725 5.49999C20.113 5.62441 19.9627 5.76378 19.8231 5.91769C19.7066 6.04627 19.5987 6.18359 19.5 6.3291C19.4013 6.18371 19.2936 6.04649 19.1771 5.918C19.0375 5.76398 18.8871 5.62451 18.7275 5.50001C18.887 5.37559 19.0373 5.23622 19.1769 5.08231ZM13.5095 5.31294C13.5652 5.72339 13.2776 6.10128 12.8672 6.15698L12.3492 6.22728L11.3238 6.36644C10.186 6.55633 9.25 7.65728 9.25 8.74999V18.5C9.25 20.5711 7.57107 22.25 5.5 22.25C3.42893 22.25 1.75 20.5711 1.75 18.5C1.75 16.4289 3.42893 14.75 5.5 14.75C6.3442 14.75 7.12325 15.0289 7.75 15.4997V8.74999C7.75 6.89294 9.25015 5.18376 11.0921 4.88439L11.1116 4.88149L12.1475 4.7409L12.6655 4.67061C13.0759 4.61491 13.4538 4.90249 13.5095 5.31294ZM5.5 16.25C6.74264 16.25 7.75 17.2573 7.75 18.5C7.75 19.7426 6.74264 20.75 5.5 20.75C4.25736 20.75 3.25 19.7426 3.25 18.5C3.25 17.2573 4.25736 16.25 5.5 16.25ZM19.5 11.75C19.9142 11.75 20.25 12.0858 20.25 12.5V17.5C20.25 19.5711 18.5711 21.25 16.5 21.25C14.4289 21.25 12.75 19.5711 12.75 17.5C12.75 15.4289 14.4289 13.75 16.5 13.75C17.3442 13.75 18.1233 14.0289 18.75 14.4997V12.5C18.75 12.0858 19.0858 11.75 19.5 11.75ZM16.5 15.25C17.7426 15.25 18.75 16.2573 18.75 17.5C18.75 18.7426 17.7426 19.75 16.5 19.75C15.2574 19.75 14.25 18.7426 14.25 17.5C14.25 16.2573 15.2574 15.25 16.5 15.25Z"
                                            fill-opacity="0.8"></path>
                                    </svg>
                                    <span>BXH Nhạc Mới</span>
                                    <div class="play-icon">
                                        <i class="fa-regular fa-circle-play"></i>
                                    </div>
                                </a>
                            </li>
                            <li class="item">
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="3" width="7.57895" height="7.57895" rx="1.89474"
                                            stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5"></rect>
                                        <rect x="13.4211" y="3" width="7.57895" height="7.57895" rx="3.78947"
                                            stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5"></rect>
                                        <path
                                            d="M7.02442 20.7272C6.89558 20.7751 6.68337 20.7751 6.55453 20.7272C5.45558 20.3321 3 18.6835 3 15.8893C3 14.6558 3.94358 13.6579 5.10695 13.6579C5.79663 13.6579 6.40674 14.0092 6.78947 14.552C7.17221 14.0092 7.78611 13.6579 8.472 13.6579C9.63537 13.6579 10.5789 14.6558 10.5789 15.8893C10.5789 18.6835 8.12337 20.3321 7.02442 20.7272Z"
                                            stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path
                                            d="M14.3684 13.7475L14.3684 20.6735C14.3684 20.819 14.5256 20.9102 14.6519 20.838L20.7121 17.375C20.8394 17.3023 20.8394 17.1188 20.7121 17.046L14.6519 13.583C14.5256 13.5109 14.3684 13.6021 14.3684 13.7475Z"
                                            stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5"></path>
                                    </svg>
                                    <span>Chủ Đề & Thể Loại</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 17L7.01888 19.6187C6.65207 19.8116 6.22335 19.5001 6.29341 19.0916L7.24472 13.5451L3.21491 9.61699C2.91815 9.32773 3.08191 8.82374 3.49202 8.76415L9.06107 7.95491L11.5516 2.90849C11.735 2.53687 12.265 2.53687 12.4484 2.90849L14.9389 7.95491L20.508 8.76415C20.9181 8.82374 21.0818 9.32773 20.7851 9.61699L16.7553 13.5451L17.7066 19.0916C17.7766 19.5001 17.3479 19.8116 16.9811 19.6187L12 17Z"
                                            stroke="currentColor" stroke-opacity="0.8" stroke-width="1.5"></path>
                                    </svg>
                                    <span>Top 100</span>
                                </a>
                            </li>
                        </ul>
                        <div class="vip-sidebar-banner">
                            <div class="title">
                                Nghe nhạc không quảng cáo cùng kho nhạc
                                PREMIUM
                            </div>
                            <a href="" class="vip-register">nâng cấp tài khoản</a>
                        </div>
                        <nav class="library-personal">
                            <ul>
                                <li class="item">
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
                                                fill="url(#paint0_linear_2645_12881)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18.9969 9.5908C17.6663 5.72656 13.4551 3.6726 9.59086 5.00317C8.07508 5.52509 6.83754 6.49084 5.97392 7.70431L5.68567 6.3482C5.61677 6.02407 5.29816 5.81717 4.97403 5.88606C4.6499 5.95496 4.443 6.27357 4.51189 6.5977L5.10718 9.39829C5.17607 9.72242 5.49468 9.92933 5.81881 9.86043L8.6194 9.26515C8.94353 9.19625 9.15044 8.87764 9.08154 8.55351C9.01265 8.22938 8.69404 8.02247 8.36991 8.09137L6.95763 8.39156C7.68104 7.37864 8.7151 6.57386 9.98154 6.13779C13.2192 5.02299 16.7475 6.74387 17.8623 9.98148C18.9771 13.2191 17.2562 16.7474 14.0186 17.8622C10.781 18.977 7.25265 17.2561 6.13785 14.0185C6.02996 13.7052 5.68851 13.5387 5.37519 13.6466C5.06188 13.7544 4.89534 14.0959 5.00322 14.4092C6.33379 18.2735 10.545 20.3274 14.4093 18.9968C18.2735 17.6663 20.3275 13.455 18.9969 9.5908ZM12.2 9.2C12.2 8.86863 11.9314 8.6 11.6 8.6C11.2687 8.6 11 8.86863 11 9.2V12.4C11 12.6006 11.1003 12.788 11.2672 12.8992L13.6672 14.4992C13.9429 14.683 14.3155 14.6085 14.4993 14.3328C14.6831 14.0571 14.6086 13.6846 14.3329 13.5008L12.2 12.0789V9.2Z"
                                                fill="#FEFFFF"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_2645_12881" x1="0" y1="0" x2="24"
                                                    y2="24" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#8E4CFF"></stop>
                                                    <stop offset="1" stop-color="#7729FF"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Nghe gần đây</span>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
                                                fill="url(#paint0_linear_2645_12880)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M5.06671 10.113C5.06671 7.59443 6.80969 5.73334 9.0816 5.73334C10.1678 5.73334 11.3216 6.37866 11.9998 7.50869C12.6785 6.37873 13.8322 5.73334 14.9185 5.73334C17.1904 5.73334 18.9334 7.59443 18.9334 10.113C18.9334 11.5975 18.2328 13.0132 17.1576 14.3049C16.0796 15.5998 14.5849 16.8197 12.8936 17.9267C12.7866 17.9972 12.6568 18.0746 12.5214 18.1367C12.4002 18.1922 12.2093 18.2667 12 18.2667C11.791 18.2667 11.6 18.1924 11.4786 18.1368C11.3428 18.0746 11.2127 17.997 11.1052 17.9259C9.41323 16.819 7.91897 15.5995 6.84157 14.3048C5.76654 13.013 5.06671 11.5973 5.06671 10.113ZM9.0816 6.93334C7.55795 6.93334 6.26671 8.16829 6.26671 10.113C6.26671 11.2116 6.78688 12.3631 7.76395 13.5372C8.73832 14.7081 10.1277 15.8526 11.7635 16.9225L11.7664 16.9244C11.842 16.9745 11.9165 17.0175 11.9781 17.0457C11.9861 17.0493 11.9933 17.0525 11.9999 17.0553C12.0064 17.0525 12.0135 17.0494 12.0214 17.0458C12.0831 17.0175 12.1579 16.9744 12.2349 16.9237L12.2364 16.9227C13.8711 15.8527 15.2606 14.7081 16.2353 13.5372C17.2128 12.363 17.7334 11.2114 17.7334 10.113C17.7334 8.16829 16.4421 6.93334 14.9185 6.93334C14.1415 6.93334 13.1387 7.53633 12.7557 8.73115L12.7553 8.73243C12.6437 9.07798 12.3337 9.28998 11.9996 9.28998C11.6655 9.28998 11.3554 9.07798 11.2438 8.73243L11.2433 8.73082C10.8613 7.53633 9.85866 6.93334 9.0816 6.93334ZM11.9576 17.0704C11.9576 17.0704 11.9581 17.0703 11.9592 17.07ZM12.0407 17.07C12.0416 17.0702 12.0421 17.0703 12.0422 17.0704Z"
                                                fill="#FEFFFF"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_2645_12880" x1="0" y1="0" x2="24"
                                                    y2="24" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#29CCFF"></stop>
                                                    <stop offset="1" stop-color="#00C2FF"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Bài hát yêu thích</span>
                                        <div class="play-icon">
                                            <i class="fa-regular fa-circle-play"></i>
                                        </div>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
                                                fill="url(#paint0_linear_2645_12884)"></path>
                                            <path d="M14 10.5H18.5" stroke="#FEFFFF" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M14 14H18.5" stroke="#FEFFFF" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M5.5 17.5H18.5" stroke="#FEFFFF" stroke-width="1.2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10.7683 4.96334C10.5823 4.87034 10.3614 4.88028 10.1845 4.9896C10.0077 5.09893 9.89999 5.29205 9.89999 5.49999V9.38364C9.37521 8.97604 8.71596 8.73334 8.00002 8.73334C6.28794 8.73334 4.90002 10.1213 4.90002 11.8333C4.90002 13.5454 6.28794 14.9333 8.00002 14.9333C9.61245 14.9333 10.9374 13.7023 11.0861 12.1288C11.0952 12.0873 11.1 12.0442 11.1 12V11.8486C11.1 11.8435 11.1 11.8384 11.1 11.8333C11.1 11.8283 11.1 11.8232 11.1 11.8181V6.47081L13.2317 7.53665C13.528 7.68484 13.8885 7.56471 14.0366 7.26832C14.1848 6.97194 14.0647 6.61153 13.7683 6.46334L10.7683 4.96334ZM9.89999 11.8214V11.8453C9.89357 12.8891 9.04539 13.7333 8.00002 13.7333C6.95068 13.7333 6.10002 12.8827 6.10002 11.8333C6.10002 10.784 6.95068 9.93334 8.00002 9.93334C9.04539 9.93334 9.89357 10.7776 9.89999 11.8214Z"
                                                fill="#FEFFFF"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_2645_12884" x1="0" y1="0" x2="24"
                                                    y2="24" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FA7433"></stop>
                                                    <stop offset="1" stop-color="#FA6D29"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Playlist</span>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
                                                fill="url(#paint0_linear_3153_2362)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 6.10015C8.74154 6.10015 6.10002 8.74167 6.10002 12.0001C6.10002 14.2755 7.38793 16.2511 9.27734 17.2359C9.57119 17.389 9.68525 17.7514 9.53209 18.0452C9.37894 18.3391 9.01657 18.4532 8.72271 18.3C6.45234 17.1167 4.90002 14.7402 4.90002 12.0001C4.90002 8.07892 8.0788 4.90015 12 4.90015C14.7401 4.90015 17.1166 6.45245 18.2999 8.7228C18.453 9.01665 18.339 9.37903 18.0451 9.53218C17.7513 9.68534 17.3889 9.57128 17.2357 9.27743C16.251 7.38804 14.2754 6.10015 12 6.10015ZM12 11.1001C11.503 11.1001 11.1 11.5031 11.1 12.0001C11.1 12.4972 11.503 12.9001 12 12.9001C12.4971 12.9001 12.9 12.4972 12.9 12.0001C12.9 11.5031 12.4971 11.1001 12 11.1001ZM9.90002 12.0001C9.90002 10.8403 10.8402 9.90015 12 9.90015C13.1598 9.90015 14.1 10.8403 14.1 12.0001C14.1 13.1599 13.1598 14.1001 12 14.1001C10.8402 14.1001 9.90002 13.1599 9.90002 12.0001ZM17.0621 11.5276C16.8814 11.3862 16.6358 11.3602 16.4295 11.4607C16.2232 11.5612 16.0923 11.7706 16.0923 12.0001V15.1229C15.7261 14.9093 15.2993 14.7872 14.8461 14.7872C13.5075 14.7872 12.4 15.8524 12.4 17.1936C12.4 18.5349 13.5075 19.6001 14.8461 19.6001C16.1847 19.6001 17.2923 18.5349 17.2923 17.1936V13.2317L18.6302 14.279C18.8911 14.4833 19.2682 14.4373 19.4725 14.1764C19.6767 13.9154 19.6308 13.5383 19.3698 13.3341L17.0621 11.5276ZM14.8461 15.9872C15.5467 15.9872 16.0923 16.5396 16.0923 17.1936C16.0923 17.8477 15.5467 18.4001 14.8461 18.4001C14.1456 18.4001 13.6 17.8477 13.6 17.1936C13.6 16.5396 14.1456 15.9872 14.8461 15.9872Z"
                                                fill="#FEFFFF"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_3153_2362" x1="0" y1="0" x2="24"
                                                    y2="24" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF52B1"></stop>
                                                    <stop offset="1" stop-color="#FF3DA8"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Album</span>
                                    </a>
                                </li>
                                <li class="item">
                                    <a href="">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.5164 7.14319C1.32829 3.21545 3.8263 1.02782 7.72282 0.366909C10.6032 -0.121503 13.4847 -0.12767 16.3602 0.380652C20.3723 1.08984 22.7841 3.40504 23.5524 7.39215C24.1461 10.4736 24.1554 13.5879 23.5431 16.6663C22.7218 20.5669 20.1593 22.9747 16.2772 23.6331C13.3968 24.1215 10.5153 24.1277 7.63977 23.6193C3.62772 22.9102 1.20521 20.4794 0.436861 16.4923C-0.186982 13.3905 -0.126933 10.2566 0.5164 7.14319Z"
                                                fill="url(#paint0_linear_2645_12883)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.7367 6.26666C15.3117 6.26666 17.3597 8.42271 17.3891 11.0404C18.6829 11.4673 19.5999 12.7204 19.5999 14.1744C19.5999 15.9681 18.2007 17.4667 16.421 17.4667H8.31569C6.12879 17.4667 4.3999 15.6234 4.3999 13.4051C4.3999 11.1864 6.12884 9.34359 8.31569 9.34359C8.34566 9.34359 8.37539 9.34402 8.40488 9.34486C9.07639 7.55701 10.7485 6.26666 12.7367 6.26666ZM16.1894 11.0974C16.1894 9.06768 14.6195 7.46666 12.7367 7.46666C11.1634 7.46666 9.81454 8.58314 9.40999 10.1402C9.33208 10.4401 9.03862 10.6314 8.7328 10.5815C8.58611 10.5577 8.4489 10.5436 8.31569 10.5436C6.8397 10.5436 5.5999 11.8 5.5999 13.4051C5.5999 15.0099 6.83975 16.2667 8.31569 16.2667H16.421C17.4898 16.2667 18.3999 15.3545 18.3999 14.1744C18.3999 13.0958 17.6343 12.2377 16.6854 12.1034C16.3685 12.0586 16.1425 11.7728 16.172 11.4541C16.1831 11.3342 16.1894 11.2155 16.1894 11.0974ZM10.2423 12.6909C10.4766 12.9252 10.8565 12.9252 11.0908 12.6909L11.7332 12.0485V14.4715C11.7332 14.8029 12.0019 15.0715 12.3332 15.0715C12.6646 15.0715 12.9332 14.8029 12.9332 14.4715V12.0485L13.5756 12.6909C13.81 12.9252 14.1899 12.9252 14.4242 12.6909C14.6585 12.4566 14.6585 12.0767 14.4242 11.8424L12.7575 10.1757C12.5232 9.9414 12.1433 9.9414 11.909 10.1757L10.2423 11.8424C10.008 12.0767 10.008 12.4566 10.2423 12.6909Z"
                                                fill="#FEFFFF"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_2645_12883" x1="0" y1="0" x2="24"
                                                    y2="24" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF6161"></stop>
                                                    <stop offset="1" stop-color="#FF3D3D"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <span>Nghe gần đây</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
                <div class="create-playlist-btn">
                    <i class="fa-solid fa-plus"></i>
                    <span>Tạo playlist mới</span>
                </div>
            </div>
        </aside>
    `
}
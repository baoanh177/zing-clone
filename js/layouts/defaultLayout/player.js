export default function Player() {
    return `
        <div class="player-model">
            <div class="music-info">
                <div class="music-thumb">
                    <img src="./assets/images/music-thumb.jpg" alt="" />
                </div>
                <div class="info">
                    <span class="music-title">Tất Cả Hoặc Không Là Gì Cả</span>
                    <h3 class="author-name">Cao Thái Sơn</h3>
                </div>
                <div class="music-actions">
                    <div class="add-to-library icon">
                        <i class="fa-regular fa-heart"></i>
                        <div class="tool-tip">Thêm vào thư viện</div>
                    </div>
                    <div class="show-more">
                        <div class="show-more-icon icon">
                            <i class="fa-solid fa-ellipsis"></i>
                            <div class="tool-tip">Xem thêm</div>
                        </div>
                        <div class="model"></div>
                    </div>
                </div>
            </div>

            <div class="player">
                <div class="controls">
                    <div class="random-toggle">
                        <i class="fa-solid fa-shuffle"></i>
                        <div class="tool-tip">Bật phát ngẫu nhiên</div>
                    </div>
                    <div class="prev-btn">
                        <i class="fa-solid fa-backward-step"></i>
                    </div>
                    <div class="play-toggle">
                        <i class="fa-solid fa-play"></i>
                    </div>
                    <div class="next-btn">
                        <i class="fa-solid fa-forward-step"></i>
                    </div>
                    <div class="loop-toggle">
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
                            data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                            <path
                                d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
                            </path>
                        </svg>
                        <div class="tool-tip">Bật phát lại tất cả</div>
                    </div>
                </div>
                <div class="play-inner">
                    <div class="current-time">00:00</div>
                    <div class="progress-bar">
                        <div class="progress">
                            <div class="dot"></div>
                        </div>
                    </div>
                    <div class="duration-time">00:00</div>
                </div>
            </div>

            <div class="player-actions">
                <div class="mv-btn icon">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
                        data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                        <path d="M11.196 8 6 5v6l5.196-3z"></path>
                        <path
                            d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z">
                        </path>
                    </svg>
                    <div class="tool-tip">Xem MV</div>
                </div>
                <div class="karaoke-btn icon">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
                        data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                        <path
                            d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z">
                        </path>
                    </svg>
                    <div class="tool-tip">Xem lại bài hát</div>
                </div>
                <div class="window-mode-btn icon">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
                        data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                        <path
                            d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z">
                        </path>
                        <path
                            d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z">
                        </path>
                    </svg>
                    <div class="tool-tip">Chế độ cửa sổ</div>
                </div>
                <div class="volume">
                    <div class="icon">
                        <div class="mute"></div>
                        <div class="have-sound">
                            <svg role="presentation" height="16" width="16" aria-hidden="true"
                                aria-label="Âm lượng cao" id="volume-icon" viewBox="0 0 16 16" data-encore-id="icon"
                                class="Svg-sc-ytk21e-0 haNxPq">
                                <path
                                    d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z">
                                </path>
                                <path
                                    d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress">
                            <div class="dot"></div>
                        </div>
                    </div>
                </div>
                <div class="divide"></div>
                <div class="show-playlist">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"
                        data-encore-id="icon" class="Svg-sc-ytk21e-0 haNxPq">
                        <path
                            d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    `
}
// Lấy các thẻ HTML để thao tác
const audioPlayer = document.getElementById("myAudio");
const playerBar = document.getElementById("player-bar");
const playPauseBtn = document.getElementById("play-pause-btn");

const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerImg = document.getElementById("player-img");

// 1. Hàm gọi khi click vào 1 Card bài hát
function playMusic(title, artist, imgSrc, audioSrc) {
    // Cập nhật thông tin lên thanh Player ở dưới
    playerTitle.innerText = title;
    playerArtist.innerText = artist;
    playerImg.src = imgSrc;

    // Gắn link nhạc và tự động phát
    audioPlayer.src = audioSrc;
    audioPlayer.play();

    // Hiển thị thanh Player Bar
    playerBar.style.display = "flex";
    
    // Cập nhật icon thành nút Tạm Dừng
    playPauseBtn.innerText = "⏸";
}

// 2. Hàm xử lý nút Play / Pause trên thanh nhạc
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play(); // Nếu đang dừng thì cho chạy
        playPauseBtn.innerText = "⏸";
    } else {
        audioPlayer.pause(); // Nếu đang chạy thì tạm dừng
        playPauseBtn.innerText = "▶";
    }
}

// 3. Hàm xử lý nút Next / Prev
function nextOrPrev(action) {
    alert("Chức năng chuyển bài đang được phát triển!");
    // Để làm được chức năng này, bạn sẽ cần tạo một Mảng (Array) 
    // chứa danh sách các bài hát trong JS để nó biết bài tiếp theo là bài nào.
}
// Hàm cuộn danh sách bài hát
function scrollSlider(direction) {
    const slider = document.getElementById("mySlider");
    const scrollAmount = 220; // Khoảng cách trượt (bằng chiều rộng thẻ + khoảng cách gap)
    
    if (direction === 'left') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
// Hàm Đóng/Mở Sidebar trên Điện thoại
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show');
}
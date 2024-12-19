// 切换喜欢的爱心状态
function toggleLike() {
    const likeIcon = document.getElementById('like-icon');
    if (likeIcon.src.includes('like.png')) {
        likeIcon.src = 'likefull.png';
    } else {
        likeIcon.src = 'like.png';
    }
}

// 显示隐私弹窗
function showPrivacy() {
    const popup = document.getElementById('privacy-popup');
    popup.style.display = 'block';
}

// 关闭隐私弹窗
function closePrivacy() {
    const popup = document.getElementById('privacy-popup');
    popup.style.display = 'none';
}

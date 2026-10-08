# Bật tài khoản học viên (duyệt qua Gmail)

App đã có sẵn phần đăng nhập Google và bảng quản trị. Phần này **tự tắt** cho đến khi bạn điền cấu hình Firebase, nên web hiện tại vẫn mở cho mọi người như cũ.

Admin: `nguyentoandinh.0511@gmail.com`

## Cách hoạt động

| Trạng thái | Quyền học |
|---|---|
| Chưa đăng nhập / chờ duyệt | Chỉ học thử **Unit 1 (L1-U01)** |
| Đã duyệt | Toàn bộ 128 bài |
| Bị chặn | Không vào học được bài nào |
| Admin | Toàn bộ + bảng quản lý học viên |

Hai cách cấp quyền, đều trong bảng **Quản lý học viên** (đăng nhập admin, bấm chip 👤 ở trang chủ):

1. **Học viên tự đăng ký:** học viên bấm "Đăng nhập bằng Google" → hiện ở tab **Chờ duyệt** → admin bấm **Duyệt**.
2. **Admin cấp Gmail trước:** tab **+ Cấp Gmail**, dán một hoặc nhiều Gmail → học viên đăng nhập đúng Gmail đó là vào học ngay.

Admin cũng có thể **Thu hồi** (về chờ duyệt), **Chặn**, **Bỏ chặn** và **Xoá** tài khoản.

- *Xoá* chỉ xoá khỏi danh sách duyệt. Nếu người đó đăng nhập lại sẽ thành "chờ duyệt". Muốn cấm hẳn, dùng **Chặn**.
- Bản ghi của học viên nằm ở Firestore (`students/<gmail>`), không phải tài khoản Google của họ.

## Cài đặt (làm 1 lần, khoảng 10 phút)

1. Vào https://console.firebase.google.com → **Add project** (tắt Google Analytics cũng được).
2. **Build → Authentication → Get started → Sign-in method → Google → Enable**, chọn email hỗ trợ là Gmail của bạn → Save.
3. **Authentication → Settings → Authorized domains → Add domain:** thêm tên miền web trên Vercel (ví dụ `xxx-rouge.vercel.app`). Có tên miền riêng thì thêm luôn.
4. **Build → Firestore Database → Create database** (chọn chế độ *production*, vị trí gần Việt Nam như `asia-southeast1`).
5. Firestore → tab **Rules** → dán toàn bộ nội dung file [`firestore.rules`](firestore.rules) → **Publish**.
6. **Project settings (bánh răng) → Your apps → biểu tượng `</>` (Web)** → đặt tên, đăng ký. Firebase hiện đoạn `firebaseConfig`; lấy 4 giá trị: `apiKey`, `authDomain`, `projectId`, `appId`.
7. Vào **Vercel → dự án → Settings → Environment Variables**, thêm 4 biến (áp dụng cho Production):

   | Tên biến | Giá trị |
   |---|---|
   | `VITE_FIREBASE_API_KEY` | `apiKey` |
   | `VITE_FIREBASE_AUTH_DOMAIN` | `authDomain` |
   | `VITE_FIREBASE_PROJECT_ID` | `projectId` |
   | `VITE_FIREBASE_APP_ID` | `appId` |

   Đây là mã định danh web công khai, không phải mật khẩu. Bảo mật nằm ở luật Firestore (bước 5).
8. Deploy lại: `vercel deploy --prod --yes` (trong thư mục dự án).

Muốn thử trên máy: copy `.env.example` thành `.env.local`, điền 4 giá trị, chạy `npm run dev`.

## Kiểm tra sau khi deploy

1. Mở web → thấy nút **👤 Đăng nhập** ở góc trái trên. Các unit từ Unit 2 trở đi hiện ổ khoá.
2. Đăng nhập bằng Gmail admin → chip đổi thành ảnh đại diện, bấm vào → **Quản lý học viên**.
3. Dùng một Gmail khác đăng nhập → quay lại admin thấy ở tab **Chờ duyệt** → bấm **Duyệt** → Gmail kia tự mở khoá, không cần tải lại.

## Lưu ý về mức bảo mật

Đây là app web tĩnh: toàn bộ nội dung bài học nằm sẵn trong mã chạy trên trình duyệt. Việc khoá bài ngăn học viên bình thường dùng khi chưa được duyệt, nhưng một người rành kỹ thuật vẫn có thể đọc nội dung bằng công cụ lập trình. Danh sách học viên và quyền duyệt thì được bảo vệ thật bởi luật Firestore (chỉ admin mới sửa được). Nếu cần bảo vệ nội dung chặt hơn, phải chuyển bài học sang tải từ máy chủ sau khi kiểm tra quyền.

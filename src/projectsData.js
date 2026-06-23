// src/projectsData.js
export const SIX_PROJECTS = [
{
    slug: 'bai-1-thao-tac-tep-tin',
    title: 'Bài tập 1 - Chương 1: Máy tính và các thiết bị ngoại vi',
    subtitle: 'Bài 1: Thao tác cơ bản với tệp tin và thư mục',
    objective: 'Thực hành và làm chủ các kỹ năng quản lý tệp tin, thư mục trên hệ điều hành Windows bao gồm: tạo mới, đổi tên, sao chép, di chuyển và xóa dữ liệu một cách thành thạo.',
    
    // Phần body được bọc HTML có sẵn CSS inline để tạo khoảng cách và in đậm y như ảnh
    body: `
      <div style="display: flex; flex-direction: column; gap: 28px;">
        
        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">1. Mở File Explorer:</h4>
          <p style="margin: 0; color: #444;">Sử dụng tổ hợp phím <strong>Windows + E</strong> hoặc nhấp trực tiếp vào biểu tượng thư mục (File Explorer) màu vàng dưới thanh Taskbar.</p>
          
          </div>
        <div style="margin: 30px auto; width: 100%; max-width: 100%; border: 1px solid #eaeaea; padding: 10px; background-color: #ffffff; box-sizing: border-box;">
          <img 
            src="/images/s1.png" 
            alt="Bảng thiết kế prompt minh họa" 
            style="width: 100%; height: auto; display: block; max-width: 100%;"
            onerror="this.style.display='none'; console.error('Không tìm thấy file ảnh! Hãy kiểm tra lại thư mục public.');"
          />
          <p style="margin: 10px 0 0 0; font-size: 13px; color: #666; text-align: center; font-style: italic; font-family: sans-serif;">
            Hình minh họa: Bảng phân cấp các mức độ Prompt Engineering áp dụng trong tác vụ học tập.
          </p>
        </div>
        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">2. Truy cập ổ đĩa/thư mục:</h4>
          <p style="margin: 0; color: #444;">Tại thanh điều hướng bên trái, nhấn vào mục <strong>This PC</strong>. Sau đó, truy cập vào một ổ đĩa lưu trữ (ví dụ: ổ <strong>D:</strong> hoặc <strong>E:</strong>, tránh lưu ở ổ hệ thống C:). Nếu máy tính chỉ có một phân vùng ổ C:, bạn có thể lưu tại thư mục <strong>Documents</strong>.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">3. Tạo thư mục mới:</h4>
          <p style="margin: 0; color: #444;">Click chuột phải vào bất kỳ vùng trống nào trong ổ đĩa, chọn <strong>New → Folder</strong>.<br/>Nhập tên thư mục theo cú pháp yêu cầu: <strong>ThucHanh_NguyenDucThanh</strong> và nhấn Enter để xác nhận.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">4. Vào thư mục vừa tạo:</h4>
          <p style="margin: 0; color: #444;">Nhấp đúp chuột (Double-click) vào thư mục <strong>ThucHanh_NguyenDucThanh</strong> để mở.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">5. Tạo tệp tin văn bản:</h4>
          <p style="margin: 0; color: #444;">Bên trong thư mục, nhấp chuột phải vào khoảng trống → chọn <strong>New → Text Document</strong>.<br/>Đặt tên cho tệp là <strong>GhiChu.txt</strong> và nhấn Enter.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">6. Đổi tên tệp tin:</h4>
          <p style="margin: 0; color: #444;">Nhấp chuột phải vào tệp <strong>GhiChu.txt</strong> vừa tạo, chọn <strong>Rename</strong> (hoặc chọn tệp và nhấn F2).<br/>Tiến hành đổi tên tệp thành <strong>GhiChuQuanTrong.txt</strong> rồi nhấn Enter.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">7. Tạo thư mục con:</h4>
          <p style="margin: 0; color: #444;">Vẫn trong thư mục ThucHanh_NguyenDucThanh, tiếp tục nhấp chuột phải → chọn <strong>New → Folder</strong> và đặt tên thư mục con này là <strong>TaiLieu</strong>.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">8. Sao chép tệp tin (Copy & Paste):</h4>
          <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #444; display: flex; flex-direction: column; gap: 8px;">
            <li>Click chuột phải vào tệp <strong>GhiChuQuanTrong.txt</strong> → chọn <strong>Copy</strong> (hoặc dùng phím tắt Ctrl + C).</li>
            <li>Mở thư mục <strong>TaiLieu</strong> bằng cách nhấp đúp chuột. Sau đó click chuột phải vào vùng trống → chọn <strong>Paste</strong> (hoặc Ctrl + V). Lúc này, tệp tin đã được nhân bản thêm một bản sao bên trong thư mục TaiLieu.</li>
          </ul>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">9. Di chuyển tệp tin (Cut & Paste):</h4>
          <ul style="margin: 5px 0 0 0; padding-left: 20px; color: #444; display: flex; flex-direction: column; gap: 8px;">
            <li>Trở lại thư mục gốc ThucHanh_NguyenDucThanh. Tạo thêm một tệp văn bản mới và đặt tên là <strong>DiChuyen.txt</strong>.</li>
            <li>Nhấp chuột phải vào tệp <strong>DiChuyen.txt</strong> → chọn <strong>Cut</strong> (hoặc Ctrl + X).</li>
            <li>Mở lại thư mục <strong>TaiLieu</strong>, nhấp chuột phải vào vùng trống → chọn <strong>Paste</strong> (Ctrl + V). Tệp tin gốc sẽ được dời sang vị trí mới này và không còn ở thư mục ban đầu.</li>
          </ul>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">10. Xóa tệp tin:</h4>
          <p style="margin: 0; color: #444;">Tại thư mục TaiLieu, nhấp chuột phải vào tệp <strong>GhiChuQuanTrong.txt</strong> → chọn <strong>Delete</strong> (hoặc nhấn phím Delete trên bàn phím). Tệp tin sẽ được đưa vào Thùng rác (Recycle Bin).</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">11. Xóa vĩnh viễn:</h4>
          <p style="margin: 0; color: #444;">Chọn tệp <strong>DiChuyen.txt</strong>, nhấn giữ phím <strong>Shift</strong> đồng thời nhấn <strong>Delete</strong>.<br/>Một hộp thoại cảnh báo sẽ xuất hiện. Xác nhận <strong>Yes</strong> để xóa vĩnh viễn tệp này khỏi máy tính mà không đưa vào Thùng rác.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">12. Khôi phục từ Thùng rác (Tùy chọn):</h4>
          <p style="margin: 0; color: #444;">Quay ra màn hình chính (Desktop), nhấp đúp vào biểu tượng <strong>Recycle Bin</strong>.<br/>Tìm đến tệp <strong>GhiChuQuanTrong.txt</strong> đã xóa ở bước 10, nhấp chuột phải và chọn <strong>Restore</strong>. Tệp sẽ được khôi phục về lại thư mục TaiLieu ban đầu.</p>
        </div>

      </div>
    `,
    
    // Phần kết luận đã được thay đổi theo đoạn văn mới của bạn
    conclusion: 'Đối với cá nhân em, việc thiết lập và phân cấp thư mục rõ ràng là yếu tố tiên quyết để quản lý dữ liệu hiệu quả trên máy tính. Em ưu tiên sử dụng một thư mục gốc (Data) làm kho lưu trữ tổng, từ đó rẽ nhánh thành các danh mục chuyên biệt như: Học tập, Cá nhân, Công việc/CV, và Dữ liệu chung. Đặc biệt trong nhóm Học tập, tài liệu sẽ tiếp tục được chia nhỏ theo từng học kỳ (Kì 1, Kì 2). Sự phân bổ logic này không chỉ giúp em hệ thống hóa kiến thức các môn học một cách gọn gàng, mà còn hỗ trợ việc tra cứu, ôn tập diễn ra nhanh chóng hơn rất nhiều. Thiết lập thói quen sắp xếp file khoa học giúp em loại bỏ hoàn toàn tình trạng thất lạc tài liệu, đồng thời tối ưu hóa thời gian và hiệu suất làm việc mỗi ngày.',
    bannerUrl: '/images/1.png',
    
    // Đừng quên sửa tên file PDF này đúng với tên file bạn đang có trong thư mục public nhé!
    pdfUrl: '/1.pdf', 
  },

 {
    slug: 'bai-2-tim-kiem-danh-gia',
    title: 'Bài tập 2 - Chương 2: Khai thác dữ liệu và thông tin',
    subtitle: 'Bài 2: Tìm kiếm và đánh giá thông tin học thuật',
    objective: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    
    // Phần body được bọc HTML đồng bộ hoàn toàn với thiết kế Editorial/Minimalism
    body: `
      <div style="display: flex; flex-direction: column; gap: 28px;">
        
        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">Bước 1: Chọn chủ đề nghiên cứu</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Lựa chọn chủ đề <strong>“Công nghệ mạng 6G và Băng tần Terahertz (THz)”</strong>. Lý do chọn đề tài: Sự bùng nổ các cuộc điều tra học thuật này
tạo ra một yêu cầu cấp thiết: chúng ta cần phải phân loại, tổng hợp và sử
dụng lượng thông tin khổng lồ này dưới một phương pháp tiếp cận có hệ
thống và được tiêu chuẩn hóa.
</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">Bước 2: Xác định nguồn tìm kiếm thông tin</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Việc tìm kiếm được thực hiện trên 4 nhóm nguồn bắt buộc: Cơ sở dữ liệu học thuật (Google Scholar), Tạp chí khoa học chuyên ngành, Sách chuyên khảo và Nguồn mở trên Internet.</p>
        </div>
        <div style="margin: 30px auto; width: 100%; max-width: 750px; border: 1px solid #eaeaea; padding: 12px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); box-sizing: border-box;">
  <img 
    src="/images/proj2_1.png" 
    alt="tìm kiếm thông tin cho chủ đề" 
    style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 4px;" 
  />
</div>
        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">Bước 3: Thu thập tài liệu tham khảo</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Đã thu thập thành công 10 nguồn tài liệu về án lệ Việt Nam công bố trong giai đoạn 2015–2025. Danh mục này bao gồm ít nhất 5 bài báo khoa học, sách chuyên khảo, báo cáo và nguồn mở chính thống. Trong đó có các nghiên cứu học thuật tiêu biểu của các tác giả như Nguyễn Văn Cường (2018), Trần Thị Hiền (2020), Lê Mai Anh (2021).</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">Bước 4: Đánh giá độ tin cậy của nguồn thông tin</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Tiến hành thẩm định từng tài liệu dựa trên các tiêu chí cốt lõi: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, chỉ số trích dẫn và tính cập nhật. Cụ thể, khi khai thác trên Google Scholar, các bài viết có chỉ số trích dẫn cao và được đăng tải trên các tạp chí có quy trình phản biện (peer-review) được ưu tiên hàng đầu.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 6px 0; font-size: 17px; color: #111;">Bước 5: Trình bày và tổng hợp dữ liệu</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Lập bảng tổng hợp 10 nguồn tài liệu theo các trường thông tin chuẩn hóa (Tác giả/Cơ quan, năm xuất bản, loại nguồn, tiêu chí nổi bật và chấm điểm mức độ tin cậy từ 1–5) nhằm tối ưu hóa việc so sánh và lựa chọn nguồn phù hợp.</p>
        </div>

      </div>
    `,
    
    // Bài này bạn không ghi mục kết luận, mình để trống, giao diện sẽ tự động ẩn khối xám tổng kết đi một cách thông minh
    conclusion: '',
    
    bannerUrl: '/images/2.png',
    // Đừng quên sửa tên file PDF tương ứng với Bài 2 nhé
    pdfUrl: '/2.pdf', 
  },

{
  slug: 'bai-3-viet-prompt-hieu-qua',
  title: 'Bài tập 3 - Chương 3: Tổng quan về trí tuệ nhân tạo',
  subtitle: 'Bài 2: Viết prompt hiệu quả cho các tác vụ học tập',
  objective: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
  
  body: `
    <style>
      .prompt-layout {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        box-sizing: border-box;
      }
      
      /* Giao diện trên Máy tính (PC / Windows) */
      .prompt-main-row {
        display: flex;
        gap: 24px;
        align-items: flex-start;
        width: 100%;
      }
      .prompt-left-text {
        flex: 0 0 67%;
        max-width: 67%;
        box-sizing: border-box;
      }
      .prompt-right-img {
        flex: 0 0 65%;
        max-width: 65%;
        border: 1px solid #eaeaea;
        padding: 6px;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        box-sizing: border-box;
      }
      .prompt-right-img img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 4px;
      }
      
      /* Khối ẩn giấu ảnh trên PC, chỉ lộ diện khi dùng Mobile */
      .prompt-mobile-only-img {
        display: none;
      }

      /* Giao diện trên Điện thoại (Mobile) */
      @media (max-width: 768px) {
        .prompt-left-text {
          flex: 0 0 100% !important;
          max-width: 100% !important;
        }
        /* Ẩn khối ảnh bên phải của PC đi */
        .prompt-main-row .prompt-right-img {
          display: none !important;
        }
        /* Hiện khối ảnh nằm giữa mục 1 và mục 2 lên */
        .prompt-mobile-only-img {
          display: block !important;
          width: 100% !important;
          border: 1px solid #eaeaea;
          padding: 6px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          box-sizing: border-box;
          margin: 12px 0 24px 0;
        }
        .prompt-mobile-only-img img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 4px;
        }
      }
    </style>

    <div style="display: flex; flex-direction: column; gap: 32px;">
      
      <div class="prompt-layout">
        <h4 style="margin: 0; font-size: 18px; color: #111; border-bottom: 2px solid #eee; padding-bottom: 6px; font-weight: 600;">Quá trình thực hiện:</h4>
        
        <div class="prompt-main-row">
          
          <div class="prompt-left-text">
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #222;">1. Chọn 3 tác vụ học tập phổ biến:</p>
              <ul style="margin: 0 0 8px 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">• Tóm tắt một bài đọc/tài liệu học thuật</li>
                <li style="margin-bottom: 4px;">• Giải thích một khái niệm phức tạp</li>
                <li style="margin-bottom: 4px;">• Tạo bộ câu hỏi ôn tập cho một chủ đề</li>
              </ul>
              <p style="margin: 8px 0 4px 0; color: #111; font-weight: 600;">=&gt; Em chọn:</p>
              <ul style="margin: 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">- Tóm tắt bài học ngữ pháp tiếng Anh: Thì hiện tại hoàn thành</li>
                <li style="margin-bottom: 4px;">- Giải thích khái niệm phức tạp: Ẩn dụ trong ngôn ngữ học</li>
                <li style="margin-bottom: 4px;">- Tạo câu hỏi ôn tập: Chủ đề “Từ loại tiếng Việt”</li>
              </ul>
            </div>

            <div class="prompt-mobile-only-img">
              <img src="/images/proj3_1.jpg" alt="Ảnh 0 - Bảng thiết kế prompt minh họa" />
            </div>

            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #222;">2. Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau:</p>
              <ul style="margin: 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">• Prompt cơ bản (đơn giản, ngắn gọn)</li>
                <li style="margin-bottom: 4px;">• Prompt cải tiến (chi tiết hơn, có cấu trúc)</li>
                <li style="margin-bottom: 4px;">• Prompt nâng cao (áp dụng các kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples)</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #222;">3. Thử nghiệm các prompt với một công cụ AI (như ChatGPT) và so sánh kết quả.</p>
              <ul style="margin: 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">• <strong>Prompt cơ bản:</strong> Nội dung thường đúng nhưng dễ dài, đôi khi lan man vì thiếu giới hạn và cấu trúc.</li>
                <li style="margin-bottom: 4px;">• <strong>Prompt cải tiến:</strong> Kết quả gọn gàng hơn, đúng trọng tâm, dễ ghi chú học tập.</li>
                <li style="margin-bottom: 4px;">• <strong>Prompt nâng cao:</strong> Hiệu quả nhất vì có vai trò + yêu cầu cụ thể, nội dung sinh động, phù hợp mục tiêu học tập/giảng dạy.</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #222;">4. Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.</p>
              <p style="margin: 0 0 6px 0; color: #333; font-weight: 500;">Prompt nâng cao tốt hơn vì:</p>
              <ul style="margin: 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">• Có ngữ cảnh vai trò (role prompting) → AI trả lời đúng giọng và đúng mục tiêu hơn</li>
                <li style="margin-bottom: 4px;">• Có định dạng đầu ra rõ ràng → dễ đọc, dễ dùng</li>
                <li style="margin-bottom: 4px;">• Có thể có ví dụ minh họa / so sánh → sâu và dễ hiểu hơn</li>
              </ul>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #222;">5. Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm.</p>
              <ul style="margin: 0; padding-left: 0; color: #444; line-height: 1.6; list-style-type: none;">
                <li style="margin-bottom: 4px;">• Rõ ràng – cụ thể – có mục tiêu</li>
                <li style="margin-bottom: 4px;">• Thêm ngữ cảnh và vai trò</li>
                <li style="margin-bottom: 4px;">• Giới hạn đầu ra (số câu, số ý, dạng gạch đầu dòng…)</li>
                <li style="margin-bottom: 4px;">• Cho ví dụ mẫu hoặc hướng dẫn (few-shot prompting)</li>
                <li style="margin-bottom: 4px;">• Thử nghiệm – đánh giá – điều chỉnh</li>
              </ul>
            </div>

          </div>

          <div class="prompt-right-img">
            <img src="/images/proj3_1.jpg" alt="Ảnh 0 - Bảng thiết kế prompt minh họa" />
          </div>

        </div>
      </div>

      <div>
        <h4 style="margin: 0 0 20px 0; font-size: 18px; color: #111; border-bottom: 2px solid #eee; padding-bottom: 6px; font-weight: 600;">Kết quả:</h4>
        
        <div style="display: flex; gap: 24px; align-items: flex-start; width: 100%; box-sizing: border-box;">
          
          <div style="flex: 1; box-sizing: border-box;">
            <div style="border: 1px solid #eaeaea; padding: 6px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); margin-bottom: 14px;">
              <img 
                src="/images/proj3_2.jpg" 
                alt="Ảnh 1 - Prompt ban đầu" 
                style="width: 100%; height: auto; display: block; border-radius: 4px;" 
              />
            </div>
            <div style="padding-left: 2px;">
              <p style="margin: 0 0 8px 0; font-weight: 700; color: #111; font-size: 16px;">Prompt ban đầu</p>
              <p style="margin: 0; color: #444; line-height: 1.65; text-align: justify;">Prompt ban đầu khá ngắn gọn và dễ viết, giúp AI hiểu được chủ đề cần tóm tắt. Tuy nhiên vì yêu cầu còn chung chung nên kết quả thường trình bày chưa có cấu trúc rõ ràng, đôi lúc dài và thiếu trọng tâm ôn tập. Người học phải tự lọc lại thông tin quan trọng nên chưa thật sự tiện để sử dụng như ghi chú học bài.</p>
            </div>
          </div>
          
          <div style="flex: 1; box-sizing: border-box;">
            <div style="border: 1px solid #eaeaea; padding: 6px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); margin-bottom: 14px;">
              <img 
                src="/images/proj3_3.jpg" 
                alt="Ảnh 2 - Prompt cải tiến" 
                style="width: 100%; height: auto; display: block; border-radius: 4px;" 
              />
            </div>
            <div style="padding-left: 2px;">
              <p style="margin: 0 0 8px 0; font-weight: 700; color: #111; font-size: 16px;">Prompt cải tiến</p>
              <p style="margin: 0; color: #444; line-height: 1.65; text-align: justify;">Prompt cải tiến cụ thể hơn và có thêm ngữ cảnh “đóng vai giáo viên”, đồng thời yêu cầu nội dung theo từng mục nên AI trả lời rõ ràng, mạch lạc và đúng trọng tâm hơn. Kết quả ngắn gọn, dễ hiểu, có thể dùng trực tiếp để ôn thi hoặc ghi chú mà không cần chỉnh sửa nhiều. Prompt này giúp tiết kiệm thời gian và cho đầu ra phù hợp hơn với mục tiêu học tập.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  `,
  
  conclusion: 'Thông qua việc thử nghiệm và đối chiếu các cấp độ câu lệnh, em nhận thấy việc tối ưu hóa cấu trúc câu lệnh đóng vai trò quyết định đến chất lượng thông tin phản hồi. Chuyển đổi từ các câu lệnh ngắn, chung chung sang các prompt có kỹ nghệ sư phạm rõ ràng giúp biến AI thành một người trợ lý học tập thực thụ, hỗ trợ đắc lực cho việc tiếp thu và hệ thống hóa kiến thức một cách khoa học.',
  bannerUrl: '/images/3.png',
  pdfUrl: '/3.pdf', 
},

// 4
{
    slug: 'bai-4-cong-cu-hop-tac-truc-tuyen',
    title: 'Bài tập 4 - Chương 4: Giao tiếp và hợp tác trong môi trường số',
    subtitle: 'Bài 3: Sử dụng công cụ hợp tác trực tuyến trong dự án nhóm',
    objective: 'Nâng cao tư duy quản trị và thành thạo hệ sinh thái các công cụ cộng tác trực tuyến, từ đó tối ưu hóa quy trình phân công tác vụ, đồng sáng tạo nội dung và kiểm soát tiến độ làm việc nhóm trong không gian số.',
    
    body: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">1. Khởi động dự án và định hình mục tiêu</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Để thiết lập một môi trường thực nghiệm toàn diện về kỹ năng hợp tác số, nhóm chúng em đã tiến hành thảo luận, tương tác trực tuyến và thống nhất triển khai một dự án mô phỏng quy mô nhỏ: <strong>"Khởi tạo bài thuyết trình và xây dựng báo cáo nghiên cứu chuyên đề"</strong>. Dự án được hoạch định thực thi chặt chẽ trong tổng thời gian giới hạn là một tuần.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">2. Chiến lược đồng bộ hóa hệ sinh thái công cụ số</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Nhận thức được tầm quan trọng của việc tối ưu hóa quy trình làm việc tập thể, nhóm đã nghiên cứu và phân loại các công cụ hỗ trợ theo đúng 3 nhóm chức năng cốt lõi:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 10px;">
            <li><strong>Nền tảng quản lý dự án (Trello):</strong> Đóng vai trò số hóa các đầu việc, phân định rõ ràng trách nhiệm cá nhân và theo dõi trực quan tiến độ của toàn bộ dự án.</li>
            <li><strong>Nền tảng đồng sáng tạo tài liệu (Google Docs):</strong> Cho phép các thành viên cùng tham gia soạn thảo, biên tập và đóng góp nội dung văn bản theo thời gian thực (Real-time).</li>
            <li><strong>Hệ thống lưu trữ và phân phối tài nguyên (Google Drive):</strong> Kho lưu trữ đám mây tập trung giúp bảo mật, đồng bộ hóa và quản lý tập trung mọi tệp tin, dữ liệu dùng chung.</li>
          </ul>
        </div>
<div style="margin: 25px auto; width: 100%; max-width: 750px; border: 1px solid #eaeaea; padding: 12px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); box-sizing: border-box;">
  <img 
    src="/images/proj4_1.png" 
    alt="Các công cụ hợp tác trực tuyến được sửa dụng" 
    style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 4px;" 
  />
</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">3. Thiết lập không gian làm việc số tập trung</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Giai đoạn chuẩn bị được chuẩn hóa bằng việc khởi tạo một bảng Trello dùng chung cho dự án, cấp quyền truy cập qua email cho toàn bộ thành viên cấu thành. Song song với đó, hệ thống thư mục lưu trữ trên Google Drive cũng được liên kết cấu hình đồng bộ trực tiếp với tệp dữ liệu Google Docs. Sự tích hợp này đảm bảo dòng chảy thông tin thông suốt, giúp mọi thành viên luôn nắm bắt được phiên bản tài liệu mới nhất.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">4. Vận hành và kiểm soát tiến độ chu kỳ dự án</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Trong suốt 7 ngày triển khai liên tục, hệ thống công cụ số đã phát huy tối đa vai trò điều phối nhịp nhàng các hoạt động nghiệp vụ:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 8px;">
            <li>Các đầu việc được dịch chuyển liên tục trên mô hình <strong>Kanban trực quan của Trello</strong> qua ba trạng thái kiểm soát: <em>Việc cần làm – Đang thực hiện – Đã hoàn thành</em>.</li>
            <li>Nội dung bài báo cáo được bồi đắp liên tục trên Google Docs, các thành viên chủ động tương tác phản biện thông qua tính năng để lại nhận xét (comment) và gán thẻ công việc.</li>
            <li>Hệ thống thư mục thông minh trên Google Drive liên tục tiếp nhận, phân loại các định dạng tài nguyên phục vụ bài thuyết trình, từ hình ảnh thiết kế đến các tài liệu tham khảo học thuật có giá trị.</li>
          </ul>
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">5. Thu thập minh chứng dữ liệu phối hợp</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Để bảo đảm tính khách quan, minh bạch và khoa học trong quá trình đánh giá, nhóm đã lưu trữ lại chuỗi ảnh chụp màn hình (screenshot) ghi nhận từng thao tác thực tế. Đây là các minh chứng trực quan, phản ánh chính xác nỗ lực kiểm soát deadline, tương tác đồng đội và giải quyết xung đột thông tin trên các không gian mạng.</p>
        </div>
<div style="margin: 25px auto; width: 100%; max-width: 750px; border: 1px solid #eaeaea; padding: 12px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); box-sizing: border-box;">
  <img 
    src="/images/proj4_2.png" 
    alt="Các công cụ hợp tác trực tuyến được sửa dụng" 
    style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 4px;" 
  />
</div>
      </div>
    `,
    
    // Phần kết luận được biên tập thành đoạn văn tổng kết cực kỳ mượt mà, sâu sắc
    conclusion: 'Việc vận dụng linh hoạt hệ sinh thái công cụ trực tuyến từ Trello, Google Docs đến Google Drive đã giúp nhóm hoàn thành dự án một cách khoa học, chuyên nghiệp và đúng hạn. Quá trình này không chỉ giúp tối ưu hóa hiệu suất làm việc tập thể, hạn chế tối đa các rào cản về khoảng cách địa lý mà còn là minh chứng rõ nét cho năng lực thích nghi, tư duy quản trị dự án và tinh thần phối hợp của các thành viên trong môi trường kỹ thuật số hiện đại.',
    bannerUrl: '/images/4.png',
    // Đừng quên sửa lại tên file PDF cho khớp với thư mục public của bạn nhé!
    pdfUrl: '/4.pdf', 
  },
  
{
    slug: 'bai-5-ai-tao-sinh-sang-tao',
    title: 'Bài tập 5 - Chương 5: Sáng tạo nội dung số',
    subtitle: 'Bài 2: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    objective: 'Thành thạo việc phối hợp và ứng dụng linh hoạt hệ sinh thái các công cụ AI tạo sinh (Generative AI) vào chuỗi quy trình sáng tạo, từ khâu lên ý tưởng, sản xuất nội dung văn bản cho đến thiết kế hình ảnh trực quan.',
    
    body: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">1. Định hình dự án và lựa chọn chủ đề</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Để thực nghiệm toàn diện quy trình đồng sáng tạo cùng trí tuệ nhân tạo, em đã lựa chọn xây dựng một chiến dịch nội dung tích hợp bao gồm bài viết Blog kết hợp Infographic trực quan. Dự án tập trung vào một chủ đề mang tính thời sự và có tính gắn kết cao với cộng đồng: <strong>“5 dấu hiệu stress ở sinh viên và cách tự chăm sóc tinh thần mỗi ngày”</strong>.</p>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 17px; color: #111;">2. Thiết lập chuỗi công cụ AI tạo sinh chuyên biệt</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Thay vì phụ thuộc vào một nền tảng duy nhất, em đã cấu trúc quy trình sản xuất dựa trên thế mạnh cốt lõi của ba công cụ AI độc lập, tạo thành một dây chuyền làm việc khép kín:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 10px;">
            <li><strong>ChatGPT (Mô hình ngôn ngữ):</strong> Đóng vai trò làm cổng tư duy ban đầu, hỗ trợ lên ý tưởng cấu trúc bài viết và xây dựng nội dung chi tiết với văn phong đồng cảm, thân thiện hướng tới đối tượng sinh viên.</li>
            <li><strong>DALL-E 3 (Mô hình tạo ảnh):</strong> Chịu trách nhiệm chuyển hóa ngôn từ thành thị giác, khởi tạo các phôi đồ họa minh họa cho các phân đoạn nội dung như <em>"5 dấu hiệu stress"</em> hay phương pháp <em>"Pomodoro 25-5"</em> theo một phong cách thống nhất.</li>
            <li><strong>Canva AI (Nền tảng thiết kế):</strong> Đóng vai trò tinh chỉnh hậu kỳ, kiểm soát bố cục tổng thể, đồng bộ hóa bảng màu Pastel làm dịu thị giác và tái cấu trúc hệ thống chữ ký tự.</li>
          </ul>
        </div>
<div style="margin: 25px auto; width: 100%; max-width: 750px; border: 1px solid #eaeaea; padding: 12px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); box-sizing: border-box;">
  <img 
    src="/images/proj5_1.png" 
    alt="ảnh minh họa" 
    style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 4px;" 
  />
</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">3. Kỹ nghệ câu lệnh và Quá trình tối ưu hậu kỳ</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Quá trình khai thác AI đòi hỏi sự tinh chỉnh câu lệnh (Prompt) liên tục kết hợp với tư duy biên tập khắt khe để bù đắp các giới hạn công nghệ:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 10px;">
            <li><strong>Về nội dung:</strong> Dù văn bản từ ChatGPT có độ phủ thông tin nhanh, em vẫn tiến hành đọc duyệt thủ công, loại bỏ các cụm từ sáo rỗng và tái cấu trúc câu chữ để bài viết mang hơi thở thực tế, gần gũi hơn với đời sống sinh viên.</li>
            <li><strong>Về mặt thị giác:</strong> DALL-E 3 cho ra các biểu tượng phẳng (flat icon) rất đẹp mắt nhưng lại gặp hạn chế cố hữu về hiển thị ký tự tiếng Việt. Để giải quyết, em đã trích xuất các phần tử hình ảnh, đưa vào không gian làm việc của Canva để loại bỏ lỗi chữ, chèn lại Typography chuẩn và cân bằng lại khoảng trống đồ họa.</li>
          </ul>
        </div>

        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">4. Thay đổi tư duy và Trách nhiệm đạo đức trong kỷ nguyên AI</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Trải nghiệm này đã tái định hình sâu sắc quy trình làm việc cá nhân. AI không thay thế con người mà đóng vai trò như một <strong>"trợ lý sáng tạo xuất sắc"</strong>, giải phóng em khỏi những công đoạn thủ công tốn thời gian để tập trung vào quản trị ý tưởng và kiểm định chất lượng. Tuy nhiên, em luôn đặt tính minh bạch lên hàng đầu bằng việc chủ động gắn nhãn nguồn gốc đồng sáng tạo AI, vừa tôn trọng quyền tác giả, vừa tránh việc lạm dụng công nghệ làm xói mòn tư duy phản biện độc lập.</p>
        </div>

      </div>
    `,
    
    // Phần kết luận được biên tập thành đoạn văn tổng kết mượt mà hiển thị trong khối xám
    conclusion: 'Trong bài tập này, em thực hiện một dự án sáng tạo nội dung với chủ đề “5 dấu hiệu stress ở sinh viên và cách tự chăm sóc tinh thần mỗi ngày”. Để hoàn thiện sản phẩm, em kết hợp ba công cụ AI tạo sinh gồm ChatGPT (tạo nội dung), DALL-E 3 (tạo hình minh hoạ/infographic) và Canva AI (chỉnh sửa thiết kế). Quy trình bắt đầu từ việc dùng ChatGPT để lên ý tưởng, sau đó em đọc lại và chỉnh sửa thủ công để nội dung rõ ràng, tự nhiên hơn. Tiếp theo, em sử dụng DALL-E 3 để tạo các infographic minh họa trực quan. Do DALL-E đôi lúc bị lỗi chữ trên hình, em tiếp tục đưa các sản phẩm vào Canva AI để căn chỉnh bố cục, điều chỉnh màu sắc và hoàn thiện sản phẩm chuyên nghiệp hơn. Nhìn chung, AI đã hỗ trợ em rất nhiều trong việc tiết kiệm thời gian và đồng bộ phong cách, nhưng vai trò kiểm tra, chọn lọc của con người vẫn là yếu tố quyết định chất lượng cuối cùng.',
    bannerUrl: '/images/5.png',
    // Bạn nhớ thay đổi link file PDF này khớp với file thực tế trong thư mục public nhé!
    pdfUrl: '/5.pdf', 
  },

{
    slug: 'bai-6-su-dung-ai-co-trach-nhiem',
    title: 'Bài tập 6 - Chương 6: An toàn và liêm chính học thuật trong môi trường số',
    subtitle: 'Bài 4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    objective: 'Xây dựng tư duy và thiết lập hệ thống nguyên tắc đạo đức trong việc khai thác trí tuệ nhân tạo, đảm bảo ranh giới giữa hỗ trợ công nghệ và liêm chính học thuật trong môi trường đại học.',
    
    body: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">1. Khảo sát chính sách học thuật tại môi trường Đại học</h4>
          <p style="margin: 0; color: #444; line-height: 1.6;">Để có điểm tựa pháp lý vững chắc, em đã tiến hành nghiên cứu khung chính sách tại <strong>Đại học Quốc gia Hà Nội (VNU)</strong>. Dù hiện tại chưa ban hành văn bản riêng biệt dành riêng cho AI, nhà trường đã tích hợp việc kiểm soát công cụ này vào <em>Quy định về đạo đức học thuật, phòng chống đạo văn và trung thực trong nghiên cứu</em>. VNU định vị AI thuần túy là công cụ hỗ trợ mở rộng, tuyệt đối không được thay thế tư duy độc lập hay làm sai lệch kết quả đánh giá năng lực của người học.</p>
        </div>
<div style="margin: 25px auto; width: 100%; max-width: 750px; border: 1px solid #eaeaea; padding: 12px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); box-sizing: border-box;">
  <img 
    src="/images/proj6_1.png" 
    alt="Các công cụ hợp tác trực tuyến được sửa dụng" 
    style="width: 100%; max-width: 100%; height: auto; display: block; border-radius: 4px;" 
  />
</div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 17px; color: #111;">2. Ứng dụng AI thực nghiệm và Quy trình cá nhân hóa dữ liệu</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Em đã chọn nhiệm vụ xây dựng bài luận chuyên đề: <em>“Sử dụng AI có trách nhiệm trong học tập và nghiên cứu”</em> làm phôi thực nghiệm. Tiến trình phối hợp được kiểm soát chặt chẽ qua các bước:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 8px;">
            <li>Sử dụng mô hình để gợi ý khung cấu trúc tổng thể (dàn ý) và định hình hướng tiếp cận bài viết.</li>
            <li>Khai thác danh mục các vấn đề đạo đức phổ biến và bộ nguyên tắc tham chiếu từ AI.</li>
            <li><strong>Tư duy phản biện cá nhân:</strong> Toàn bộ phôi thông tin do AI sinh ra được em sàng lọc, viết lại hoàn toàn bằng ngôn từ cá nhân, lồng ghép các lập luận và góc nhìn riêng biệt nhằm đảm bảo tính độc lập và chiều sâu học thuật, đồng thời lập bảng minh bạch toàn bộ các prompt đã sử dụng.</li>
          </ul>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 17px; color: #111;">3. Phân tích ranh giới đạo đức trong không gian số</h4>
          <p style="margin: 0 0 12px 0; color: #444; line-height: 1.6;">Từ quá trình đối chiếu thực tế, em đã đúc kết và làm rõ ba bài toán đạo đức cốt lõi:</p>
          <ul style="margin: 0; padding-left: 20px; color: #333; display: flex; flex-direction: column; gap: 10px;">
            <li><strong>Ranh giới giữa Trợ giúp và Gian lận:</strong> Ranh giới nằm ở mức độ can thiệp. Sử dụng AI để gợi ý, tra cứu và tối ưu diễn đạt là hỗ trợ hợp pháp; nhưng sao chép nguyên văn biến đầu ra của máy thành sản phẩm cá nhân chính là hành vi gian lận học thuật.</li>
            <li><strong>Sở hữu trí tuệ và Nguy cơ Đạo văn:</strong> Bản chất của AI là tổng hợp dữ liệu quy mô lớn, rất dễ dẫn đến hiện tượng đạo văn không chủ ý. Việc kiểm chứng chéo và trích dẫn nguồn tường minh là nghĩa vụ bắt buộc của người học.</li>
            <li><strong>Hệ lụy đến sự phát triển tư duy:</strong> Sự tiện lợi của AI có thể tạo ra tâm lý ỷ lại, làm xói mòn năng lực phản biện, tư duy phân tích và kỹ năng giải quyết vấn đề độc lập – những kỹ năng vốn chỉ được rèn luyện qua quá trình tự làm việc nghiêm túc.</li>
          </ul>
        </div>

      </div>
    `,
    
    // Khối xám tổng kết chứa trọn vẹn bộ nguyên tắc cá nhân viết cực kỳ gãy gọn và uy tín
    conclusion: 'Để định hình trách nhiệm cá nhân, em thiết lập bộ 6 nguyên tắc vàng khi đồng hành cùng công nghệ: (1) AI chỉ là công cụ hỗ trợ, tuyệt đối không thay thế tư duy gốc. (2) Luôn minh bạch và trung thực học thuật về phạm vi sử dụng AI trong mọi bài làm. (3) Tuân thủ nghiêm ngặt quy định và giới hạn cho phép của nhà trường cùng giảng viên. (4) Chịu trách nhiệm tối cao và toàn phần về độ chính xác của nội dung nộp. (5) Thẩm định, tái cấu trúc và cá nhân hóa 100% đầu ra từ máy. (6) Tôn trọng quyền sở hữu trí tuệ, kiên quyết chống đạo văn dưới mọi hình thức để bảo vệ giá trị tự học thực chất.',
    bannerUrl: '/images/6.png',
    // Bạn nhớ thay đổi link file PDF này khớp với file thực tế trong thư mục public nhé!
    pdfUrl: '/6.pdf', 
  }
];
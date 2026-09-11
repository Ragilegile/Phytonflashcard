/* ============================================================
   PROGRAMMING LEARNING HUB — logika aplikasi
   Struktur: META → DATA → STATE/STORAGE → UTIL → HIGHLIGHT →
             DECK → RENDER → AKSI → EVENT → INIT
   ============================================================ */

/* ============================================================
   1) META COURSE
   ============================================================ */
const COURSES = {
  python:    { name: 'Python',           icon: '🐍', desc: 'Fondasi pemrograman: variabel, loop, function, OOP, hingga API.',            lang: 'python' },
  html:      { name: 'HTML',             icon: '🌐', desc: 'Struktur & konten halaman web: tag, form, semantic, tabel, dan list.',       lang: 'html' },
  css:       { name: 'CSS',              icon: '🎨', desc: 'Tampilan & layout: selector, box model, Flexbox, Grid, animasi.',            lang: 'css' },
  javascript:{ name: 'JavaScript',       icon: '⚡', desc: 'Interaktivitas web: DOM, events, array methods, async, dan fetch.',           lang: 'js' },
  webfund:   { name: 'Web Fundamentals', icon: '🌍', desc: 'Cara web benar-benar bekerja: HTTP, DNS, server, API, keamanan.',            lang: 'text' }
};

/* ============================================================
   2) DATA FLASHCARD
   Struktur tiap kartu:
   { question, answer, code, explanation (string|array), output?, difficulty, category }
   Menambah kartu = tambahkan objek di AKHIR array course
   (di akhir agar progres tersimpan tidak bergeser).
   ============================================================ */
const CARDS = {

/* ────────────────────────────────────────────────────────────
   PYTHON (65 kartu)
   ──────────────────────────────────────────────────────────── */
python: [
  { question: 'Apa itu Python dan kenapa banyak digunakan pemula?', difficulty: 'Beginner', category: 'Python Basics',
    answer: 'Python adalah bahasa pemrograman high-level yang diterjemahkan interpreter. Sintaksnya mirip bahasa manusia sehingga mudah dibaca, dan dipakai di banyak bidang: web, data science, otomasi, hingga AI.',
    code: `print("Hello, World!")`, output: `Hello, World!`,
    explanation: 'Satu baris saja sudah cukup untuk program pertamamu.' },
  { question: 'Bagaimana cara menampilkan output dan menulis komentar?', difficulty: 'Beginner', category: 'Python Basics',
    answer: 'print() menampilkan output ke layar. Komentar diawali tanda # dan sepenuhnya diabaikan interpreter — dipakai untuk memberi penjelasan pada kode.',
    code: `# ini komentar, tidak dijalankan
print("Belajar Python")   # ini juga komentar`, output: `Belajar Python`,
    explanation: 'Komentar membantu kode mudah dipahami saat dibaca ulang.' },
  { question: 'Mengapa indentasi sangat penting di Python?', difficulty: 'Beginner', category: 'Python Basics',
    answer: 'Python menggunakan indentasi (spasi di awal baris) untuk menentukan blok kode — bukan kurung kurawal {} seperti bahasa lain. Standarnya 4 spasi. Indentasi yang salah membuat program error.',
    code: `nilai = 80
if nilai >= 75:
    print("Lulus")     # masuk blok if
print("Selesai")       # TIDAK masuk blok if`, output: `Lulus
Selesai`,
    explanation: 'Kedua print berada pada indentasi berbeda — artinya blok yang berbeda.' },
  { question: 'Apa itu variabel dan bagaimana membuatnya?', difficulty: 'Beginner', category: 'Variables',
    answer: 'Variabel adalah nama untuk menyimpan nilai. Di Python kamu tidak perlu mendeklarasikan tipe — cukup tulis nama = nilai. Tanda = berarti "simpan nilai ke variabel", bukan persamaan matematika.',
    code: `nama = "Andi"
umur = 17
print(nama, "berumur", umur)`, output: `Andi berumur 17`,
    explanation: '= menyimpan nilai; tipe data tidak perlu dideklarasikan.' },
  { question: 'Apa saja aturan penamaan variabel?', difficulty: 'Beginner', category: 'Variables',
    answer: 'Gunakan snake_case (huruf kecil + underscore). Nama tidak boleh diawali angka, tidak boleh sama dengan keyword Python, dan bersifat case-sensitive (nama dan Nama adalah dua variabel berbeda).',
    code: `total_harga = 5000    # benar: snake_case
user_2 = "Budi"       # benar: angka boleh di tengah
2harga = 100          # SALAH: diawali angka
class = "IPA"         # SALAH: class adalah keyword`,
    explanation: 'Dua baris terakhir akan error jika dijalankan.' },
  { question: 'Apakah variabel di Python bisa berganti tipe?', difficulty: 'Beginner', category: 'Variables',
    answer: 'Bisa. Python bersifat dynamic typing — variabel tidak "terkunci" pada satu tipe dan boleh menyimpan tipe yang berbeda kapan saja. Cek tipe sebuah nilai dengan type().',
    code: `x = 10
print(type(x))
x = "sepuluh"
print(type(x))`, output: `<class 'int'>
<class 'str'>`,
    explanation: 'Variabel x berganti dari int ke str tanpa konversi khusus.' },
  { question: 'Apa saja tipe data paling umum di Python?', difficulty: 'Beginner', category: 'Data Types',
    answer: 'int (bilangan bulat), float (desimal), str (teks), bool (True/False), lalu koleksi: list, tuple, set, dan dict. Gunakan type() untuk melihat tipe sebuah nilai.',
    code: `print(type(42), type(3.14), type("hai"), type(True))`,
    output: `<class 'int'> <class 'float'> <class 'str'> <class 'bool'>`,
    explanation: 'type() berguna untuk memastikan tipe data saat debugging.' },
  { question: 'Apa bedanya mutable dan immutable?', difficulty: 'Intermediate', category: 'Data Types',
    answer: 'Mutable = bisa diubah setelah dibuat (list, dict, set). Immutable = tidak bisa diubah (str, int, float, tuple). Mengubah nilai immutable berarti membuat nilai baru, bukan mengubah yang lama.',
    code: `angka = [1, 2, 3]
angka[0] = 99        # OK, list itu mutable
print(angka)

teks = "Python"
teks[0] = "J"        # Error! string itu immutable`,
    output: `[99, 2, 3]
TypeError: 'str' object doesn't support item assignment`,
    explanation: 'Baris terakhir error karena string tidak bisa diubah per karakter.' },
  { question: 'Bagaimana mengambil karakter atau potongan teks (indexing & slicing)?', difficulty: 'Beginner', category: 'String',
    answer: 'Index dimulai dari 0, dan index negatif dihitung dari belakang. Slicing memakai format [mulai:selesai] — posisi selesai tidak ikut diambil.',
    code: `kata = "Python"
print(kata[0])     # karakter pertama
print(kata[-1])    # karakter terakhir
print(kata[0:3])   # 3 karakter pertama`, output: `P
n
Pyt`,
    explanation: 'kata[0:3] mengambil index 0, 1, 2 — index 3 tidak ikut.' },
  { question: 'Apa itu f-string dan kenapa lebih praktis?', difficulty: 'Beginner', category: 'String',
    answer: 'f-string menggabungkan teks dan variabel secara langsung: tulis f sebelum tanda kutip, lalu letakkan variabel (bahkan ekspresi) di dalam kurung kurawal. Jauh lebih ringkas daripada penggabungan dengan +.',
    code: `nama, umur = "Rina", 20
print(f"{nama} berumur {umur} tahun")
print(f"Tahun depan: {umur + 1}")`, output: `Rina berumur 20 tahun
Tahun depan: 21`,
    explanation: 'Ekspresi seperti umur + 1 bisa langsung dihitung di dalam {}.' },
  { question: 'Method string apa yang paling sering dipakai?', difficulty: 'Beginner', category: 'String',
    answer: 'strip() membuang spasi di depan-belakang, upper()/lower() mengganti kapitalisasi, replace() mengganti teks, dan split() memecah menjadi list. Semua method mengembalikan string baru karena string immutable.',
    code: `s = "  Belajar Python  "
print(s.strip())
print(s.upper().strip())     # method bisa dirantai
print("a,b,c".split(","))`, output: `Belajar Python
BELAJAR PYTHON
['a', 'b', 'c']`,
    explanation: 's.strip() tidak mengubah s — ia mengembalikan string baru.' },
  { question: 'Apa bedanya int dan float?', difficulty: 'Beginner', category: 'Numbers',
    answer: 'int adalah bilangan bulat tanpa desimal; float adalah bilangan desimal (ada titiknya). Perhatikan: pembagian biasa dengan / selalu menghasilkan float, walau kedua angkanya int.',
    code: `print(10 / 2)        # / selalu menghasilkan float
print(type(10 / 2))
print(type(5))        # int: tanpa desimal`, output: `5.0
<class 'float'>
<class 'int'>`,
    explanation: '10 / 2 hasilnya 5.0 bukan 5, karena / selalu menghasilkan float.' },
  { question: 'Apa kegunaan operator //, %, dan **?', difficulty: 'Beginner', category: 'Numbers',
    answer: '// adalah pembagian yang dibulatkan ke bawah (floor division), % adalah sisa bagi (modulo), dan ** adalah pangkat. Modulo sangat sering dipakai untuk cek bilangan genap/ganjil.',
    code: `print(10 // 3)      # 3 (dibulatkan ke bawah)
print(10 % 3)       # 1 (sisa bagi)
print(2 ** 8)       # 2 pangkat 8
print(7 % 2 == 0)   # genap? tidak`, output: `3
1
256
False`,
    explanation: '7 % 2 == 0 adalah cara mendeteksi bilangan genap.' },
  { question: 'Apa itu nilai truthy dan falsy?', difficulty: 'Beginner', category: 'Boolean',
    answer: 'Selain True/False, nilai lain juga punya "nilai kebenaran" saat dikonversi ke bool. Falsy: 0, 0.0, "", [], {}, None. Selebihnya truthy. Berguna untuk mengecek "ada isinya atau kosong".',
    code: `print(bool(0), bool(""))
print(bool("Python"), bool([1, 2]))

if []:
    print("penuh")
else:
    print("kosong")`, output: `False False
True True
kosong`,
    explanation: 'List kosong [] bernilai falsy sehingga blok else yang berjalan.' },
  { question: 'Apa bedanya and dan or?', difficulty: 'Beginner', category: 'Boolean',
    answer: 'and menghasilkan True jika SEMUA kondisi benar. or menghasilkan True jika MINIMAL satu benar. Python juga mengevaluasi secara short-circuit: berhenti begitu hasilnya sudah pasti.',
    code: `umur, member = 17, True
print(umur >= 17 and member)   # keduanya benar
print(umur < 17 or member)     # salah satu benar
print(not member)              # membalik nilai`, output: `True
True
False`,
    explanation: 'not membalik True menjadi False.' },
  { question: 'Apa bedanya = dan ==?', difficulty: 'Beginner', category: 'Operators',
    answer: '= adalah assignment: menyimpan nilai ke variabel. == adalah comparison: membandingkan dua nilai dan menghasilkan True/False. Kebiasaan menukar keduanya adalah bug paling umum di kalangan pemula.',
    code: `x = 5            # simpan 5 ke dalam x
print(x == 5)    # bandingkan x dengan 5
print(x == 6)
print(x)`, output: `True
False
5`,
    explanation: 'x = 5 menyimpan nilai; x == 5 membandingkan nilai.' },
  { question: 'Apa itu augmented assignment (+=, -=, *=)?', difficulty: 'Beginner', category: 'Operators',
    answer: 'Gabungan operasi dan assignment dalam satu operator: x += 1 artinya sama dengan x = x + 1. Sangat praktis untuk counter dan akumulator.',
    code: `skor = 0
skor += 10     # skor = skor + 10
skor += 20
skor *= 2      # kali 2
print(skor)`, output: `60`,
    explanation: 'skor berubah 0 → 10 → 30 → dikali 2 menjadi 60.' },
  { question: 'Bagaimana cara kerja if / elif / else?', difficulty: 'Beginner', category: 'If / Elif / Else',
    answer: 'Python mengecek kondisi dari atas ke bawah dan menjalankan blok pertama yang bernilai True — sisanya dilewati. else berjalan jika semua kondisi di atasnya salah.',
    code: `nilai = 78
if nilai >= 90:
    print("A")
elif nilai >= 75:
    print("B")
else:
    print("C")`, output: `B`,
    explanation: '78 ≥ 75 sehingga blok elif pertama yang cocok dijalankan.' },
  { question: 'Bisakah if-else ditulis dalam satu baris (ternary)?', difficulty: 'Beginner', category: 'If / Elif / Else',
    answer: 'Bisa. Formatnya: nilai_if_true if kondisi else nilai_if_false. Cocok untuk pilihan sederhana — untuk logika kompleks tetap gunakan if biasa agar mudah dibaca.',
    code: `nilai = 60
status = "Lulus" if nilai >= 70 else "Remedial"
print(status)`, output: `Remedial`,
    explanation: '60 < 70 sehingga nilai dari else yang dipakai.' },
  { question: 'Bagaimana cara kerja for loop?', difficulty: 'Beginner', category: 'For Loop',
    answer: 'for mengulang setiap elemen dari sebuah koleksi (list, string, range). range(n) menghasilkan angka 0 sampai n-1. Ini jenis loop yang paling sering dipakai di Python.',
    code: `for i in range(3):
    print("Perulangan ke", i)

for buah in ["apel", "jeruk"]:
    print(buah)`, output: `Perulangan ke 0
Perulangan ke 1
Perulangan ke 2
apel
jeruk`,
    explanation: 'range(3) menghasilkan 0, 1, 2 — angka 3 tidak ikut.' },
  { question: 'Kapan pakai for dan kapan while?', difficulty: 'Intermediate', category: 'For Loop',
    answer: 'for: jumlah perulangan sudah diketahui atau saat me-loop sebuah koleksi. while: perulangan berjalan selama kondisi benar dan jumlahnya tidak pasti (misal menunggu input valid). while tanpa pengubah kondisi = infinite loop.',
    code: `# for: jumlah sudah diketahui
for i in range(3):
    print(i)

# while: selama kondisi masih benar
stok = 3
while stok > 0:
    print("jual, sisa", stok)
    stok -= 1`, output: `0
1
2
jual, sisa 3
jual, sisa 2
jual, sisa 1`,
    explanation: 'while berhenti ketika stok mencapai 0.' },
  { question: 'Bagaimana cara kerja while loop?', difficulty: 'Beginner', category: 'While Loop',
    answer: 'while mengulang blok kode selama kondisinya True. Pastikan ada sesuatu di dalam loop yang membuat kondisi akhirnya menjadi False — kalau tidak, loop berjalan selamanya.',
    code: `hitung = 1
while hitung <= 3:
    print("Halo ke-", hitung)
    hitung += 1     # tanpa baris ini: infinite loop!`, output: `Halo ke- 1
Halo ke- 2
Halo ke- 3`,
    explanation: 'hitung += 1 membuat kondisi akhirnya bernilai False.' },
  { question: 'Apa fungsi break dan continue?', difficulty: 'Beginner', category: 'While Loop',
    answer: 'break menghentikan loop sepenuhnya lalu keluar darinya. continue melewati sisa iterasi yang sedang berjalan dan langsung lanjut ke iterasi berikutnya.',
    code: `for n in range(1, 6):
    if n == 2:
        continue    # lewati angka 2
    if n == 5:
        break       # berhenti total di angka 5
    print(n)`, output: `1
3
4`,
    explanation: 'Angka 2 dilewati; loop berhenti total di angka 5.' },
  { question: 'Apa itu function di Python?', difficulty: 'Beginner', category: 'Functions',
    answer: 'Function adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Definisikan sekali dengan def, lalu panggil namanya kapan pun dibutuhkan — tidak perlu menulis kode yang sama berulang-ulang.',
    code: `def add(a, b):
    return a + b

result = add(10, 20)
print(result)`, output: `30`,
    explanation: 'add(10, 20) mengirim nilai ke function lalu hasilnya disimpan di result.' },
  { question: 'Apa yang dikembalikan function tanpa return?', difficulty: 'Beginner', category: 'Functions',
    answer: 'Semua function mengembalikan nilai. Jika tidak ada return, yang dikembalikan adalah None — objek khusus Python yang berarti "tidak ada nilai".',
    code: `def sapa():
    print("Hai!")    # print BUKAN return

hasil = sapa()
print(hasil)`, output: `Hai!
None`,
    explanation: 'sapa() mencetak "Hai!" tetapi mengembalikan None.' },
  { question: 'Apa bedanya parameter dan argument?', difficulty: 'Beginner', category: 'Parameters & Arguments',
    answer: 'Parameter adalah variabel nama di definisi function (tempat penampung). Argument adalah nilai asli yang dikirim saat memanggil function. Mudah diingat: parameter saat def, argument saat memanggil.',
    code: `def sapa(nama):        # nama = parameter
    print("Hai,", nama)

sapa("Budi")           # "Budi" = argument`, output: `Hai, Budi`,
    explanation: 'Nilai "Budi" mengisi parameter nama saat function dipanggil.' },
  { question: 'Bagaimana memberi nilai default pada parameter?', difficulty: 'Beginner', category: 'Parameters & Arguments',
    answer: 'Tulis nilai defaultnya saat mendefinisikan: def sapa(nama="Teman"). Jika argument dikirim, nilai default diganti; jika tidak dikirim, default yang dipakai.',
    code: `def sapa(nama="Teman"):
    print(f"Halo, {nama}!")

sapa()             # pakai default
sapa("Sinta")      # kirim nilai sendiri`, output: `Halo, Teman!
Halo, Sinta!`,
    explanation: 'Argument yang dikirim menimpa nilai default.' },
  { question: 'Apa itu *args?', difficulty: 'Intermediate', category: 'Parameters & Arguments',
    answer: '*args membuat function bisa menerima jumlah argument berapa pun — semua dikumpulkan menjadi tuple. Nama "args" hanya konvensi; tanda bintang *-nya yang sebenarnya berperan.',
    code: `def jumlah(*angka):
    return sum(angka)

print(jumlah(1, 2))
print(jumlah(1, 2, 3, 4))`, output: `3
10`,
    explanation: 'Semua argument dikumpulkan menjadi tuple bernama angka.' },
  { question: 'Apa bedanya return dan print?', difficulty: 'Beginner', category: 'Return',
    answer: 'print hanya menampilkan nilai ke layar — nilainya tidak bisa dipakai lagi. return mengirim nilai keluar dari function sehingga bisa disimpan di variabel atau dihitung lanjut. Print = tampil, return = nilai.',
    code: `def kuadrat(x):
    return x ** 2

hasil = kuadrat(5)     # nilai tersimpan
print(hasil + 1)       # bisa dihitung lanjut`, output: `26`,
    explanation: 'kuadrat(5) menghasilkan nilai 25 yang bisa dihitung lanjut.' },
  { question: 'Bisakah satu function mengembalikan banyak nilai?', difficulty: 'Beginner', category: 'Return',
    answer: 'Bisa — pisahkan dengan koma. Python mengemasnya menjadi tuple, dan kamu bisa langsung meng-unpack-nya ke beberapa variabel sekaligus.',
    code: `def min_max(angka):
    return min(angka), max(angka)

kecil, besar = min_max([4, 1, 9, 3])
print(kecil, besar)`, output: `1 9`,
    explanation: 'min dan max dikemas menjadi tuple lalu di-unpack ke dua variabel.' },
  { question: 'Apa itu list dan cara dasar menggunakannya?', difficulty: 'Beginner', category: 'List',
    answer: 'List adalah kumpulan nilai yang terurut dan bisa diubah, ditulis dengan kurung siku []. Elemen diakses lewat index yang dimulai dari 0, dan jumlah elemennya dicek dengan len().',
    code: `buah = ["apel", "mangga", "pisang"]
print(buah[0])       # elemen pertama
print(len(buah))     # jumlah elemen
buah[1] = "jeruk"    # ganti elemen
print(buah)`, output: `apel
3
['apel', 'jeruk', 'pisang']`,
    explanation: 'Index 1 adalah elemen kedua — "mangga" diganti "jeruk".' },
  { question: 'Apa bedanya append() dan extend()?', difficulty: 'Beginner', category: 'List',
    answer: 'append() menambah SATU elemen ke akhir list — jika kamu memberi list, list itu menjadi elemen bersarang. extend() menggabungkan setiap elemen satu per satu ke akhir list.',
    code: `a = [1, 2]
a.append([3, 4])
print(a)

b = [1, 2]
b.extend([3, 4])
print(b)`, output: `[1, 2, [3, 4]]
[1, 2, 3, 4]`,
    explanation: 'Pada append, list [3, 4] menjadi SATU elemen bersarang.' },
  { question: 'Bagaimana cara menghapus elemen dari list?', difficulty: 'Beginner', category: 'List',
    answer: 'remove(nilai) menghapus elemen berdasarkan nilainya (yang pertama ditemukan). pop(index) menghapus berdasarkan index sekaligus mengembalikan elemennya — pop() tanpa index mengambil elemen terakhir.',
    code: `nilai = [10, 20, 30, 40]
nilai.remove(20)         # hapus nilai 20
terakhir = nilai.pop()   # ambil & hapus terakhir
print(nilai)
print("diambil:", terakhir)`, output: `[10, 30]
diambil: 40`,
    explanation: 'pop() mengembalikan elemen sehingga bisa disimpan ke variabel.' },
  { question: 'Apa itu tuple?', difficulty: 'Beginner', category: 'Tuple',
    answer: 'Tuple adalah kumpulan nilai terurut tetapi TIDAK bisa diubah (immutable), ditulis dengan kurung biasa (). Cocok untuk data tetap seperti koordinat atau tanggal.',
    code: `titik = (10, 20)
print(titik[0])
print(len(titik))
x, y = titik          # unpacking
print(x + y)`, output: `10
2
30`,
    explanation: 'x, y = titik meng-unpack tuple ke dua variabel.' },
  { question: 'Apa bedanya list dan tuple?', difficulty: 'Beginner', category: 'Tuple',
    answer: 'List ([]) bersifat mutable: bisa ditambah, diubah, dihapus — untuk data yang berubah. Tuple (()) immutable: setelah dibuat tidak bisa diubah — untuk data tetap, lebih hemat memori, dan bisa dipakai sebagai key dictionary.',
    code: `daftar = [1, 2, 3]
daftar[0] = 99      # OK, list bisa diubah

tetap = (1, 2, 3)
tetap[0] = 99       # Error! tuple tidak bisa diubah`,
    output: `TypeError: 'tuple' object does not support item assignment`,
    explanation: 'Tuple cocok untuk data tetap seperti koordinat.' },
  { question: 'Apa itu set dan kenapa bisa menghilangkan duplikat?', difficulty: 'Beginner', category: 'Set',
    answer: 'Set adalah kumpulan nilai unik dan tidak terurut, ditulis dengan kurung kurawal {}. Duplikat otomatis dibuang — ini trik cepat untuk membersihkan data yang duplikat.',
    code: `nomor = [1, 2, 2, 3, 3, 3]
unik = set(nomor)
print(unik)
print(len(unik))`, output: `{1, 2, 3}
3`,
    explanation: 'Duplikat otomatis dibuang saat list diubah menjadi set.' },
  { question: 'Bagaimana operasi gabungan dan irisan pada set?', difficulty: 'Intermediate', category: 'Set',
    answer: 'Union dengan tanda | menggabungkan semua anggota unik dari dua set. Intersection dengan tanda & hanya mengambil anggota yang ada di kedua set.',
    code: `a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)    # union
print(a & b)    # intersection`, output: `{1, 2, 3, 4, 5}
{3}`,
    explanation: '| menggabungkan; & mengambil irisan kedua set.' },
  { question: 'Apa itu dictionary?', difficulty: 'Beginner', category: 'Dictionary',
    answer: 'Dictionary menyimpan pasangan key → value dengan kurung kurawal {}. Nilai diakses lewat key (bukan index angka). Sangat cocok untuk data yang punya label, seperti data sebuah siswa.',
    code: `siswa = {"nama": "Dewi", "umur": 19}
print(siswa["nama"])
siswa["umur"] = 20          # ubah nilai
siswa["kota"] = "Bandung"   # tambah key baru
print(siswa)`, output: `Dewi
{'nama': 'Dewi', 'umur': 20, 'kota': 'Bandung'}`,
    explanation: 'Key bersifat unik — assignment ke key lama mengubah nilainya.' },
  { question: 'Bagaimana mengakses key yang mungkin tidak ada?', difficulty: 'Beginner', category: 'Dictionary',
    answer: 'Mengakses dengan [] akan error KeyError jika key tidak ditemukan. Gunakan .get(key) — mengembalikan None (atau nilai default yang kamu tentukan) sehingga program tetap aman.',
    code: `harga = {"kopi": 15000}
print(harga.get("kopi"))
print(harga.get("teh"))        # None, tidak error
print(harga.get("teh", 0))     # dengan default 0`, output: `15000
None
0`,
    explanation: 'get() mengembalikan None atau nilai default, bukan error.' },
  { question: 'Bagaimana cara me-loop sebuah dictionary?', difficulty: 'Beginner', category: 'Dictionary',
    answer: 'Gunakan .items() untuk mendapatkan key dan value sekaligus, .keys() untuk semua key, dan .values() untuk semua nilai.',
    code: `nilai = {"mat": 90, "fis": 85}
for pelajaran, skor in nilai.items():
    print(pelajaran, "->", skor)`, output: `mat -> 90
fis -> 85`,
    explanation: '.items() menghasilkan pasangan (key, value) di tiap iterasi.' },
  { question: 'Mengapa input() selalu menghasilkan string?', difficulty: 'Beginner', category: 'Input & Output',
    answer: 'Apa pun yang diketik user diperlakukan sebagai teks. Untuk operasi matematika, konversi dulu dengan int() atau float() — kalau tidak, "18" + 1 justru error karena string tidak bisa ditambah angka.',
    code: `umur = input("Umur kamu: ")   # hasilnya string
umur = int(umur)              # konversi ke angka
print("Tahun depan:", umur + 1)`, output: `Umur kamu: 18
Tahun depan: 19`,
    explanation: 'int(umur) wajib agar bisa dihitung dengan angka.' },
  { question: 'Apa fungsi sep dan end pada print()?', difficulty: 'Beginner', category: 'Input & Output',
    answer: 'sep mengatur pemisah antar nilai yang dicetak (defaultnya spasi). end mengatur karakter setelah baris selesai (defaultnya newline) — berguna untuk mencetak di baris yang sama.',
    code: `print("2025", "06", "15", sep="-")
print("Memuat", end="...")
print("selesai!")`, output: `2025-06-15
Memuat...selesai!`,
    explanation: 'end="..." membuat print berikutnya menyambung di baris yang sama.' },
  { question: 'Bagaimana cara mengkonversi tipe data?', difficulty: 'Beginner', category: 'Type Conversion',
    answer: 'Gunakan fungsi konversi: int(), float(), str(), bool(), list(). Konversi dari string hanya berhasil jika isinya memang valid untuk tipe tersebut.',
    code: `print(int("42") + 8)    # str → int
print(str(100) + "!")   # int → str
print(float("3.5"))
print(list("abc"))`, output: `50
100!
3.5
['a', 'b', 'c']`,
    explanation: 'str(100) + "!" menggabungkan teks, bukan menjumlah angka.' },
  { question: 'Kapan konversi tipe bisa gagal?', difficulty: 'Intermediate', category: 'Type Conversion',
    answer: 'Konversi eksplisit gagal jika isinya tidak cocok: int("abc") menghasilkan ValueError. Ada juga konversi implisit yang berjalan otomatis: int + float hasilnya float tanpa perlu diubah.',
    code: `print(5 + 2.0)      # int + float → float
print(int("123"))   # angka dalam teks: OK
print(int("abc"))   # bukan angka: error`, output: `7.0
123
ValueError: invalid literal for int() with base 10: 'abc'`,
    explanation: 'int + float otomatis menjadi float (konversi implisit).' },
  { question: 'Apa itu module dan bagaimana menggunakannya?', difficulty: 'Beginner', category: 'Import / Module',
    answer: 'Module adalah file berisi kode Python (fungsi, konstanta) yang bisa dipakai di file lain. Gunakan import untuk memakainya — misalnya module math berisi konstanta dan fungsi matematika siap pakai.',
    code: `import math

print(math.pi)         # konstanta pi
print(math.sqrt(16))   # akar kuadrat`, output: `3.141592653589793
4.0`,
    explanation: 'math.pi adalah konstanta; math.sqrt() adalah function.' },
  { question: 'Apa bedanya import, from-import, dan as?', difficulty: 'Beginner', category: 'Import / Module',
    answer: 'import math → akses lewat math.sqrt(). from math import sqrt → pakai langsung sqrt(). import math as m → nama pendek. Ketiganya valid; pilih yang paling jelas terbaca.',
    code: `import math
print(math.floor(3.7))

from math import ceil
print(ceil(3.2))

import math as m
print(m.pi)`, output: `3
4
3.141592653589793`,
    explanation: 'Tiga gaya import — hasilnya sama, beda cara menulisnya.' },
  { question: 'Apa itu try / except dan kenapa penting?', difficulty: 'Beginner', category: 'Exception / Try Except',
    answer: 'Error saat program berjalan (exception) biasanya langsung menghentikan program. try/except menangkap error tersebut sehingga program bisa lanjut — misalnya saat user memasukkan input yang tidak valid.',
    code: `try:
    angka = int("bukan angka")
    print(angka)
except ValueError:
    print("Input bukan angka yang valid!")

print("Program tetap lanjut")`, output: `Input bukan angka yang valid!
Program tetap lanjut`,
    explanation: 'Tanpa try/except, ValueError akan menghentikan program.' },
  { question: 'Bagaimana menangkap error spesifik dan apa itu finally?', difficulty: 'Intermediate', category: 'Exception / Try Except',
    answer: 'Tuliskan tipe error setelah except agar hanya menangkap error tertentu — boleh ada beberapa blok sekaligus. Blok finally selalu dijalankan apa pun hasilnya, cocok untuk pembersihan seperti menutup file.',
    code: `try:
    data = [1, 2]
    print(data[5])
except IndexError:
    print("Index tidak ada")
except ValueError:
    print("Nilai salah")
finally:
    print("Selalu dijalankan")`, output: `Index tidak ada
Selalu dijalankan`,
    explanation: 'Index yang diminta (5) melebihi panjang list.' },
  { question: 'Bagaimana membaca dan menulis file dengan with open()?', difficulty: 'Beginner', category: 'File Handling',
    answer: 'with open() membuka file dan menutupnya secara otomatis setelah selesai — lebih aman daripada menutup manual. Mode "r" untuk baca, "w" untuk tulis, "a" untuk tambah di akhir.',
    code: `with open("catatan.txt", "w") as f:
    f.write("Belajar Python itu seru")

with open("catatan.txt", "r") as f:
    print(f.read())`, output: `Belajar Python itu seru`,
    explanation: 'File otomatis tertutup saat keluar dari blok with.' },
  { question: 'Apa bedanya mode "w" dan "a" saat menulis file?', difficulty: 'Intermediate', category: 'File Handling',
    answer: 'Mode "w" menulis dari awal file — isi lama HILANG karena ditimpa. Mode "a" (append) menambahkan di akhir file — isi lama tetap utuh.',
    code: `with open("log.txt", "w") as f:
    f.write("baris pertama")

with open("log.txt", "a") as f:
    f.write("baris kedua")`,
    output: `isi log.txt:
baris pertama
baris kedua`,
    explanation: 'Mode "w" menimpa; mode "a" menambah di akhir.' },
  { question: 'Apa itu list comprehension?', difficulty: 'Intermediate', category: 'List Comprehension',
    answer: 'Cara singkat membuat list dari sebuah loop: [ekspresi for item in koleksi]. Satu baris menggantikan 3–4 baris loop biasa — gaya yang sangat khas Python.',
    code: `# loop biasa
hasil = []
for n in range(5):
    hasil.append(n * 2)

# list comprehension (hasil sama persis)
hasil = [n * 2 for n in range(5)]
print(hasil)`, output: `[0, 2, 4, 6, 8]`,
    explanation: 'Satu baris comprehension setara dengan loop + append.' },
  { question: 'Bagaimana menambahkan kondisi (filter) di list comprehension?', difficulty: 'Intermediate', category: 'List Comprehension',
    answer: 'Tambahkan if di akhir untuk menyaring elemen: [x for x in data if kondisi]. Untuk if-else, letakkan di bagian depan: [a if kondisi else b for x in data].',
    code: `angka = [1, 2, 3, 4, 5, 6]
genap = [n for n in angka if n % 2 == 0]
label = ["genap" if n % 2 == 0 else "ganjil" for n in angka]
print(genap)
print(label)`,
    output: `[2, 4, 6]
['ganjil', 'genap', 'ganjil', 'genap', 'ganjil', 'genap']`,
    explanation: 'if di akhir menyaring elemen; if-else di depan memilih nilai.' },
  { question: 'Apa itu lambda?', difficulty: 'Intermediate', category: 'Lambda',
    answer: 'Lambda adalah function anonim satu baris: lambda argumen: ekspresi. Cocok untuk logika singkat yang dipakai sekali — biasanya sebagai argument untuk sorted(), map(), atau filter().',
    code: `kuadrat = lambda x: x ** 2
print(kuadrat(6))

# setara dengan:
def kuadrat(x):
    return x ** 2`, output: `36`,
    explanation: 'Lambda tidak punya nama dan hanya berisi satu ekspresi.' },
  { question: 'Bagaimana lambda dipakai sebagai key di sorted()?', difficulty: 'Intermediate', category: 'Lambda',
    answer: 'sorted() menerima parameter key — fungsi penentu urutan. Lambda sangat pas di sini: sorted(data, key=lambda x: ...) tanpa perlu membuat function terpisah dengan def.',
    code: `siswa = [("Budi", 82), ("Ani", 95), ("Cita", 78)]
urut = sorted(siswa, key=lambda s: s[1], reverse=True)
print(urut)`,
    output: `[('Ani', 95), ('Budi', 82), ('Cita', 78)]`,
    explanation: 's[1] adalah skor — dasar pengurutan descending.' },
  { question: 'Apa itu class dan apa fungsi __init__?', difficulty: 'Intermediate', category: 'Class & Object',
    answer: 'Class adalah cetak biru (blueprint) untuk membuat object. __init__ adalah method khusus yang otomatis dijalankan saat object dibuat — tempat mengatur data awal. Parameter self merujuk pada object itu sendiri.',
    code: `class Siswa:
    def __init__(self, nama, umur):
        self.nama = nama      # atribut milik object
        self.umur = umur`,
    explanation: 'self menghubungkan data dengan object yang dibuat.' },
  { question: 'Apa itu object dan bagaimana membuatnya?', difficulty: 'Intermediate', category: 'Class & Object',
    answer: 'Object adalah wujud nyata dari class — hasil "mencetak" dari cetak birunya. Buat dengan memanggil nama class seperti function: NamaClass(argument). Tiap object menyimpan datanya sendiri.',
    code: `class Siswa:
    def __init__(self, nama):
        self.nama = nama

a = Siswa("Budi")   # object pertama
b = Siswa("Ani")    # object kedua
print(a.nama, "dan", b.nama)`, output: `Budi dan Ani`,
    explanation: 'a dan b dibuat dari class yang sama tetapi datanya terpisah.' },
  { question: 'Apa itu inheritance (pewarisan)?', difficulty: 'Intermediate', category: 'Basic OOP',
    answer: 'Inheritance membuat class baru mewarisi atribut dan method class lain: class Anak(Induk). Anak bisa memakai semua milik induk, menambah yang baru, atau menimpa (override) yang lama — kode tidak perlu ditulis ulang.',
    code: `class Hewan:
    def __init__(self, nama):
        self.nama = nama
    def suara(self):
        print(self.nama, "bersuara")

class Kucing(Hewan):     # Kucing mewarisi Hewan
    def suara(self):     # override method induk
        print(self.nama, "berbunyi meong")

Kucing("Oyen").suara()`, output: `Oyen berbunyi meong`,
    explanation: 'Kucing mewarisi __init__ dan menimpa method suara().' },
  { question: 'Apa itu encapsulation?', difficulty: 'Intermediate', category: 'Basic OOP',
    answer: 'Encapsulation = menyembunyikan data di dalam object dan hanya mengaksesnya lewat method. Konvensi Python: atribut yang diawali _ atau __ dianggap "internal" — sebaiknya diubah dari luar hanya lewat method.',
    code: `class Rekening:
    def __init__(self):
        self._saldo = 0           # atribut internal

    def tambah(self, jumlah):
        if jumlah > 0:
            self._saldo += jumlah

    def cek_saldo(self):
        return self._saldo

r = Rekening()
r.tambah(50000)
print(r.cek_saldo())`, output: `50000`,
    explanation: 'Perubahan saldo hanya bisa dilakukan lewat method tambah().' },
  { question: 'Bagaimana mengubah antara data Python dan JSON?', difficulty: 'Intermediate', category: 'JSON',
    answer: 'Module json mengubah data dua arah: json.dumps() mengubah dict/list Python menjadi string JSON, dan json.loads() mengubah string JSON kembali menjadi data Python.',
    code: `import json

data = {"nama": "Budi", "umur": 25}
teks = json.dumps(data)      # Python → JSON
print(teks)

kembali = json.loads(teks)   # JSON → Python
print(kembali["umur"])`,
    output: `{"nama": "Budi", "umur": 25}
25`,
    explanation: 'dumps = dump ke string; loads = load dari string.' },
  { question: 'Apa itu JSON dan seperti apa bentuknya?', difficulty: 'Intermediate', category: 'JSON',
    answer: 'JSON (JavaScript Object Notation) adalah format teks untuk pertukaran data — dipakai oleh API dan file konfigurasi. Bentuknya mirip dict Python: pasangan key-value dalam kurung kurawal. Perhatikan: true/false dan null ditulis huruf kecil (di Python: True/None).',
    code: `{
  "nama": "Produk A",
  "harga": 15000,
  "tags": ["baru", "laris"],
  "stok_tersedia": true
}`,
    explanation: 'JSON mirip dict Python, dengan true/false/null huruf kecil.' },
  { question: 'Apa itu API dan endpoint?', difficulty: 'Intermediate', category: 'API Basics',
    answer: 'API (Application Programming Interface) adalah "jembatan" yang memungkinkan dua aplikasi saling bertukar data. Endpoint adalah URL spesifik tempat data diambil atau dikirim — biasanya mengembalikan data berformat JSON.',
    code: `# Contoh endpoint API toko buku:
# GET  /api/books      → ambil semua buku
# GET  /api/books/7    → ambil detail buku no. 7
# POST /api/books      → tambah buku baru`,
    explanation: 'Satu endpoint = satu "alamat" data tertentu.' },
  { question: 'Bagaimana memanggil API dan membaca responsnya?', difficulty: 'Intermediate', category: 'API Basics',
    answer: 'Kirim request HTTP (misalnya GET) ke endpoint, lalu baca responsnya. Dengan library requests: panggil .json() untuk mengubah respons JSON menjadi dict Python. Install dulu dengan: pip install requests.',
    code: `import requests

r = requests.get("https://api.example.com/users/1")
data = r.json()          # JSON → dict Python
print(data["name"])
print(r.status_code)     # 200 artinya sukses`, output: `Ada Lovelace
200`,
    explanation: 'Status 200 berarti request sukses.' },
  { question: 'Built-in functions apa yang wajib dikuasai lebih dulu?', difficulty: 'Beginner', category: 'Useful Built-in Functions',
    answer: 'len() untuk ukuran, sum() untuk total, min()/max() untuk nilai terkecil/terbesar, abs() untuk nilai mutlak, dan round() untuk pembulatan. Semuanya bisa langsung dipakai tanpa import.',
    code: `nilai = [80, 92, 75, 88]
print(len(nilai))
print(sum(nilai))
print(min(nilai), max(nilai))
print(round(3.14159, 2))   # 2 angka desimal`, output: `4
335
75 92
3.14`,
    explanation: 'Semua fungsi ini siap pakai tanpa import.' },
  { question: 'Apa kegunaan enumerate() dan zip()?', difficulty: 'Intermediate', category: 'Useful Built-in Functions',
    answer: 'enumerate() memberi nomor index otomatis saat me-loop. zip() menjalankan dua list secara berpasangan sekaligus. Keduanya menggantikan trik index manual yang rawan error.',
    code: `buah = ["apel", "jeruk", "mangga"]
for i, nama in enumerate(buah):
    print(i, nama)

warna = ["merah", "oranye", "hijau"]
for b, w in zip(buah, warna):
    print(b, "=", w)`,
    output: `0 apel
1 jeruk
2 mangga
apel = merah
jeruk = oranye
mangga = hijau`,
    explanation: 'enumerate memberi index; zip memasangkan dua list.' },
  { question: 'Apa kegunaan map() dan filter()?', difficulty: 'Intermediate', category: 'Useful Built-in Functions',
    answer: 'map(fungsi, data) menerapkan fungsi ke setiap elemen. filter(fungsi, data) hanya menyaring elemen yang membuat fungsi bernilai True. Keduanya sering dipadukan dengan lambda.',
    code: `angka = [1, 2, 3, 4, 5, 6]
kali2 = list(map(lambda x: x * 2, angka))
genap = list(filter(lambda x: x % 2 == 0, angka))
print(kali2)
print(genap)`, output: `[2, 4, 6, 8, 10, 12]
[2, 4, 6]`,
    explanation: 'map mengubah tiap elemen; filter menyaring elemen.' }
],

/* ────────────────────────────────────────────────────────────
   HTML (25 kartu)
   ──────────────────────────────────────────────────────────── */
html: [
  { question: 'Apa itu HTML?', difficulty: 'Beginner', category: 'HTML Basics',
    answer: 'HTML (HyperText Markup Language) adalah bahasa markup untuk menyusun struktur dan konten halaman web — bukan bahasa pemrograman. HTML mendefinisikan "apa yang ada di halaman": teks, gambar, link, form; tampilannya diatur CSS, perilakunya oleh JavaScript.',
    code: `<h1>Judul halaman</h1>
<p>Ini sebuah paragraf dengan <a href="https://example.com">sebuah link</a>.</p>`,
    explanation: 'Browser membaca tag HTML lalu merendernya menjadi halaman yang terlihat.' },
  { question: 'Bagaimana struktur dasar dokumen HTML?', difficulty: 'Beginner', category: 'Struktur Dokumen',
    answer: 'Setiap dokumen HTML dimulai dengan DOCTYPE, lalu elemen <html> yang membungkus dua bagian: <head> (informasi tentang halaman) dan <body> (isi yang tampil di browser).',
    code: `<!DOCTYPE html>
<html lang="id">
<head>
    <title>Halaman Pertamaku</title>
</head>
<body>
    <h1>Halo!</h1>
</body>
</html>`,
    explanation: ['<!DOCTYPE html> memberi tahu browser ini HTML modern.', '<head> tidak tampil di halaman; <body> yang tampil.'] },
  { question: 'Apa fungsi <!DOCTYPE html>?', difficulty: 'Beginner', category: 'Struktur Dokumen',
    answer: 'DOCTYPE adalah deklarasi di baris pertama yang memberi tahu browser untuk merender halaman memakai mode standar HTML5. Tanpa DOCTYPE, browser bisa jatuh ke mode "quirks" yang tampilannya tidak konsisten antar browser.',
    code: `<!DOCTYPE html>
<html>
  <head><title>Judul</title></head>
  <body><p>Selamat datang!</p></body>
</html>`,
    explanation: 'Cukup satu baris ini di paling atas — tanpa penutup apa pun.' },
  { question: 'Apa bedanya <head> dan <body>?', difficulty: 'Beginner', category: 'Struktur Dokumen',
    answer: '<head> berisi informasi TENTANG halaman: judul tab, link ke CSS, charset, meta tag — isinya tidak digambar di halaman. <body> berisi semua konten yang benar-benar tampil: teks, gambar, tombol, form.',
    code: `<head>
    <meta charset="UTF-8">
    <title>Belajar HTML</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Ini yang tampil di layar</h1>
</body>`,
    explanation: ['<title> muncul di tab browser, bukan di halaman.', '<link> menghubungkan file CSS eksternal.'] },
  { question: 'Bagaimana menggunakan heading di HTML?', difficulty: 'Beginner', category: 'Teks & Media',
    answer: 'HTML punya 6 level heading: <h1> (paling penting) sampai <h6>. Heading bukan sekadar "teks besar" — browser dan search engine memakainya untuk memahami struktur halaman. Satu halaman idealnya punya satu <h1>.',
    code: `<h1>Nama Website</h1>
<h2>Artikel</h2>
<h3>Sub-bagian artikel</h3>
<p>Isi teks di sini.</p>`,
    explanation: 'Jangan memakai heading untuk membuat teks besar — atur ukuran dengan CSS.' },
  { question: 'Bagaimana membuat paragraf dan memformat teks?', difficulty: 'Beginner', category: 'Teks & Media',
    answer: '<p> membungkus satu paragraf. Teks penting ditebalkan dengan <strong> (makna penting) atau <em> (penekanan/italic). Spasi dan enter berlebih di kode HTML diabaikan browser.',
    code: `<p>Belajar HTML itu <strong>penting</strong>
karena semua website dibangun dari HTML.</p>

<p>Enter dan spasi berlebih akan <em>diabaikan</em> browser.</p>`,
    output: `Belajar HTML itu penting karena semua website dibangun dari HTML.
Enter dan spasi berlebih akan diabaikan browser.`,
    explanation: 'Browser menyatukan spasi/enter berlebih menjadi satu spasi.' },
  { question: 'Bagaimana membuat link dengan <a> dan href?', difficulty: 'Beginner', category: 'Teks & Media',
    answer: 'Elemen <a> (anchor) membuat link; attribute href menentukan tujuannya. Nilai absolut ("https://...") menuju situs lain; nilai relatif ("about.html") menuju file di website yang sama. target="_blank" membuka tab baru.',
    code: `<a href="https://example.com">Website eksternal</a>
<a href="about.html">Halaman internal</a>
<a href="https://example.com" target="_blank">Buka di tab baru</a>`,
    explanation: 'href = hypertext reference: alamat tujuan link.' },
  { question: 'Bagaimana menampilkan gambar dengan <img>?', difficulty: 'Beginner', category: 'Teks & Media',
    answer: '<img> memakai attribute src (sumber file gambar) dan alt (teks pengganti jika gambar gagal dimuat — juga dibacakan screen reader). <img> adalah elemen self-closing: tidak punya tag penutup.',
    code: `<img src="kucing.jpg" alt="Kucing oren sedang tidur" width="300">`,
    explanation: ['src = lokasi file gambar.', 'alt wajib diisi — penting untuk aksesibilitas & SEO.'] },
  { question: 'Bagaimana membuat tombol di HTML?', difficulty: 'Beginner', category: 'Form & Input',
    answer: '<button> membuat tombol yang bisa diklik. Yang penting: tombol di dalam <form> otomatis mengirim form (type="submit"), sedangkan type="button" membuat tombol biasa yang perilakunya diatur JavaScript.',
    code: `<button type="submit">Kirim Form</button>
<button type="button" onclick="alert('Halo!')">Klik Aku</button>`,
    explanation: 'type="button" mencegah tombol mengirim form secara tidak sengaja.' },
  { question: 'Bagaimana menggunakan <input> dan type-nya?', difficulty: 'Beginner', category: 'Form & Input',
    answer: '<input> adalah elemen form paling serbagubah — perilakunya ditentukan attribute type: text, email, password, number, checkbox, radio, date, file, dan lainnya. Browser otomatis memberi validasi & keyboard yang sesuai di mobile.',
    code: `<input type="text" placeholder="Nama lengkap">
<input type="email" placeholder="email@contoh.com">
<input type="password" placeholder="Password">
<input type="number" min="0" max="100">
<input type="checkbox"> Berlangganan`,
    explanation: 'type="email" menampilkan keyboard khusus email di HP dan memvalidasi format.' },
  { question: 'Bagaimana kerja <form> dengan action dan method?', difficulty: 'Intermediate', category: 'Form & Input',
    answer: '<form> mengumpulkan input user dan mengirimnya ke server. action = URL tujuan pengiriman; method = cara pengiriman (GET atau POST). Data diambil dari attribute name tiap input.',
    code: `<form action="/daftar" method="POST">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Daftar</button>
</form>`,
    explanation: ['Saat submit, browser mengirim pasangan name="nilai" tiap input.', 'Tanpa attribute name, nilai input TIDAK ikut terkirim.'] },
  { question: 'Apa fungsi <label> pada form?', difficulty: 'Beginner', category: 'Form & Input',
    answer: '<label> memberi teks label untuk sebuah input. Hubungkan keduanya dengan attribute for pada label yang sama dengan id pada input. Hasilnya: mengklik label ikut memfokuskan input — dan screen reader membacakan label dengan benar.',
    code: `<label for="email">Alamat Email</label>
<input type="email" id="email">

<label>
    <input type="checkbox"> Saya setuju
</label>`,
    explanation: 'for="email" harus sama persis dengan id="email" pada input.' },
  { question: 'Kapan pakai <textarea> dan kapan <input>?', difficulty: 'Beginner', category: 'Form & Input',
    answer: '<input> untuk teks satu baris (nama, email). <textarea> untuk teks multi-baris (pesan, komentar) — ukurannya diatur rows/cols atau CSS. Berbeda dari input, <textarea> punya tag penutup dan nilai awalnya ditulis di antara tag.',
    code: `<input type="text" value="teks satu baris">

<textarea rows="4" cols="30">Teks panjang
bisa beberapa baris di sini.</textarea>`,
    explanation: 'Nilai awal <textarea> adalah isi di antara tag bukan attribute value.' },
  { question: 'Bagaimana membuat dropdown dengan <select> dan <option>?', difficulty: 'Beginner', category: 'Form & Input',
    answer: '<select> membuat dropdown; tiap pilihannya adalah <option>. Nilai yang dikirim ke server diambil dari attribute value; selected menandai pilihan awal; multiple memungkinkan pilihan ganda.',
    code: `<select name="kota">
    <option value="jkt">Jakarta</option>
    <option value="bdg" selected>Bandung</option>
    <option value="sby">Surabaya</option>
</select>`,
    explanation: 'Yang terkirim ke server adalah value ("bdg"), bukan teks "Bandung".' },
  { question: 'Apa bedanya <div> dan <span>?', difficulty: 'Beginner', category: 'HTML Basics',
    answer: '<div> adalah elemen block: memenuhi lebar penuh dan memulai baris baru — dipakai untuk membungkus kelompok konten. <span> adalah inline: hanya selebar isinya dan sejajar dengan teks — dipakai untuk menandai sebagian teks.',
    code: `<div class="kartu-produk">
    <p>Harga: <span class="diskon">Rp50.000</span></p>
</div>`,
    explanation: ['div membungkus keseluruhan kartu (block).', 'span menandai harga di dalam kalimat tanpa memutus baris (inline).'] },
  { question: 'Apa itu semantic HTML dan kenapa penting?', difficulty: 'Intermediate', category: 'Semantic HTML',
    answer: 'Semantic HTML berarti memakai tag yang maknanya sesuai isi: <header>, <nav>, <main>, <article>, <footer> — bukan <div> untuk semuanya. Manfaatnya: kode mudah dibaca, baik untuk SEO, dan ramah screen reader (aksesibilitas).',
    code: `<!-- Non-semantic -->
<div class="atas">...</div>

<!-- Semantic -->
<header>...</header>
<nav>...</nav>
<main>...</main>`,
    explanation: 'Tag semantic memberi tahu browser & mesin pencari: "bagian ini adalah navigasi".' },
  { question: 'Bagaimana memakai <header>, <nav>, dan <footer>?', difficulty: 'Beginner', category: 'Semantic HTML',
    answer: '<header> membungkus bagian pengantar halaman (logo, judul). <nav> membungkus kumpulan link navigasi. <footer> membungkus bagian penutup (kontak, copyright). Ketiganya membentuk kerangka dasar setiap halaman web.',
    code: `<header>
    <h1>Blog Belajar</h1>
    <nav>
        <a href="/">Beranda</a>
        <a href="/arsip">Arsip</a>
    </nav>
</header>

<footer><p>© 2025 Blog Belajar</p></footer>`,
    explanation: 'Semua link menuju halaman utama dikumpulkan di dalam satu <nav>.' },
  { question: 'Bagaimana memakai <main>, <section>, dan <article>?', difficulty: 'Beginner', category: 'Semantic HTML',
    answer: '<main> membungkus konten utama halaman (hanya satu per halaman, tanpa nav/footer). <section> mengelompokkan konten bertema dengan heading. <article> untuk konten mandiri yang berdiri sendiri — seperti satu postingan blog atau kartu berita.',
    code: `<main>
    <section>
        <h2>Tutorial Terbaru</h2>
        <article>
            <h3>Belajar HTML</h3>
            <p>Ringkasan artikel...</p>
        </article>
    </section>
</main>`,
    explanation: ['main = konten inti halaman (satu saja).', 'article = konten yang berdiri sendiri.'] },
  { question: 'Apa bedanya <section> dan <div>?', difficulty: 'Intermediate', category: 'Semantic HTML',
    answer: 'Keduanya sama-sama wadah block, bedanya maknanya. <section> berarti "kelompok konten bertema" dan seharusnya punya heading. <div> tidak bermakna apa pun — dipakai murni untuk keperluan styling/layout ketika tidak ada tag semantic yang cocok.',
    code: `<!-- punya tema: pakai section -->
<section>
    <h2>Galeri Foto</h2>
</section>

<!-- hanya butuh wadah styling: pakai div -->
<div class="grid-wrapper"></div>`,
    explanation: 'Aturan praktis: kalau bagian itu layak punya heading, pertimbangkan <section>.' },
  { question: 'Apa itu HTML attribute?', difficulty: 'Beginner', category: 'Atribut',
    answer: 'Attribute adalah "informasi tambahan" yang ditulis di tag pembuka dengan format nama="nilai" — mengatur perilaku elemen. Contoh: href pada link, src pada gambar, type pada input, class/id untuk CSS dan JavaScript.',
    code: `<a href="https://example.com" target="_blank">Link</a>
<img src="foto.jpg" alt="Deskripsi foto" width="200">`,
    explanation: 'Formatnya selalu: nama="nilai" di dalam tag pembuka.' },
  { question: 'Apa bedanya id dan class?', difficulty: 'Beginner', category: 'Atribut',
    answer: 'id harus UNIK — satu nama id hanya untuk satu elemen per halaman; dipakai untuk elemen penting atau sebagai target JavaScript/link-anchor. class bisa dipakai berulang pada banyak elemen untuk styling yang sama. CSS: id dipilih dengan #, class dengan titik.',
    code: `<h1 id="judul-utama">Judul</h1>

<p class="kartu">Kartu pertama</p>
<p class="kartu">Kartu kedua</p>
<p class="kartu highlight">Bisa punya banyak class</p>`,
    explanation: ['#judul-utama dipakai sekali saja.', 'Satu elemen boleh punya beberapa class sekaligus, dipisah spasi.'] },
  { question: 'Apa itu HTML entities?', difficulty: 'Intermediate', category: 'Teks & Media',
    answer: 'Entity adalah kode untuk menampilkan karakter khusus atau karakter yang bisa bentrok dengan sintaks HTML, formatnya &nama;. WAJIB dipakai untuk menampilkan <, >, dan & sebagai teks biasa — kalau ditulis langsung, browser menganggapnya tag.',
    code: `<p>5 &lt; 10 &amp;&amp; 10 &gt; 5</p>
<p>&copy; 2025 &mdash; Belajar HTML</p>`,
    output: `5 < 10 && 10 > 5
© 2025 — Belajar HTML`,
    explanation: ['&lt; = <,  &gt; = >,  &amp; = &', '&copy; = ©, &mdash; = — (em dash)'] },
  { question: 'Bagaimana membuat tabel di HTML?', difficulty: 'Intermediate', category: 'Tabel & List',
    answer: 'Tabel dibangun dari <table> → baris <tr> → sel <td> (data) atau <th> (header). <th> otomatis ditebalkan dan rata tengah. Untuk aksesibilitas, bungkus baris header dengan <thead> dan isi dengan <tbody>.',
    code: `<table>
    <thead>
        <tr><th>Nama</th><th>Nilai</th></tr>
    </thead>
    <tbody>
        <tr><td>Budi</td><td>90</td></tr>
        <tr><td>Ani</td><td>95</td></tr>
    </tbody>
</table>`,
    explanation: 'tr = table row, td = table data, th = table heading.' },
  { question: 'Bagaimana membuat list di HTML?', difficulty: 'Beginner', category: 'Tabel & List',
    answer: 'Ada dua jenis list: unordered <ul> (bullet, urutan tidak penting) dan ordered <ol> (bernomor, urutan penting — seperti langkah-langkah). Setiap butirnya dibungkus <li>.',
    code: `<ul>
    <li>Belajar HTML</li>
    <li>Belajar CSS</li>
</ul>

<ol>
    <li>Nyalakan komputer</li>
    <li>Buka editor</li>
</ol>`,
    output: `• Belajar HTML     1. Nyalakan komputer
• Belajar CSS      2. Buka editor`,
    explanation: 'Pilih ul/ol berdasarkan makna: apakah urutan penting?' },
  { question: 'Apa bedanya ordered dan unordered list?', difficulty: 'Beginner', category: 'Tabel & List',
    answer: 'Ordered list (<ol>) untuk butir yang URUTANNYA PENTING: langkah resep, ranking, tutorial — browser menampilkan nomor. Unordered list (<ul>) untuk butir yang setara: daftar fitur, daftar belanja — browser menampilkan bullet. Keduanya sama-sama memakai <li>.',
    code: `<!-- urutan penting: resep -->
<ol>
    <li>Panaskan air</li>
    <li>Masukkan mie</li>
</ol>

<!-- urutan tidak penting: bahan -->
<ul>
    <li>Mie</li>
    <li>Bumbu</li>
</ul>`,
    explanation: 'Kalau butirnya diacak maknanya berubah → pakai <ol>.' }
],

/* ────────────────────────────────────────────────────────────
   CSS (36 kartu)
   ──────────────────────────────────────────────────────────── */
css: [
  { question: 'Apa itu CSS?', difficulty: 'Beginner', category: 'CSS Basics',
    answer: 'CSS (Cascading Style Sheets) adalah bahasa untuk mengatur TAMPILAN halaman HTML: warna, ukuran, posisi, animasi. HTML = struktur, CSS = tampilan. Aturan CSS terdiri dari selector (elemen apa) dan declaration block (properti: nilai).',
    code: `h1 {
    color: navy;
    font-size: 32px;
}`,
    explanation: ['h1 = selector: elemen yang mau diatur.', 'color: navy = declaration (properti: nilai).'] },
  { question: 'Apa saja 3 cara menambahkan CSS ke halaman?', difficulty: 'Beginner', category: 'CSS Basics',
    answer: 'Inline: atribut style di elemen (hanya untuk kasus khusus). Internal: tag <style> di <head> (cocok untuk satu halaman). External: file .css terpisah yang di-link — cara terbaik untuk website sungguhan karena bisa dipakai ulang di semua halaman.',
    code: `/* 1. Inline */
<p style="color: red;">Teks</p>

/* 2. Internal */
<style>p { color: red; }</style>

/* 3. External — di dalam <head> */
<link rel="stylesheet" href="style.css">`,
    explanation: 'External CSS = satu file mengatur banyak halaman sekaligus.' },
  { question: 'Apa itu selector dan bagaimana element selector bekerja?', difficulty: 'Beginner', category: 'Selector',
    answer: 'Selector menentukan elemen mana yang kena style. Paling dasar adalah element selector: tulis nama tag-nya langsung — semua elemen dengan tag itu kena style. Contoh: p mewarnai semua paragraf di halaman.',
    code: `p {
    line-height: 1.6;
}

button {
    border-radius: 8px;
}`,
    explanation: 'Semua <p> dan semua <button> di halaman kena aturan ini.' },
  { question: 'Bagaimana cara memakai class selector?', difficulty: 'Beginner', category: 'Selector',
    answer: 'Class selector dipilih dengan tanda titik diikuti nama class. Ini selector paling sering dipakai karena satu class bisa ditempelkan ke elemen mana pun dan ke banyak elemen sekaligus — fleksibel untuk komponen seperti kartu atau tombol.',
    code: `.kartu {
    background: #1b222c;
    padding: 16px;
}

<p class="kartu">Teks</p>
<div class="kartu">Konten</div>`,
    explanation: 'Titik hanya ditulis di CSS — di HTML cukup class="kartu".' },
  { question: 'Bagaimana cara memakai ID selector?', difficulty: 'Beginner', category: 'Selector',
    answer: 'ID selector dipilih dengan tanda pagar # diikuti nama id. Karena id harus unik, aturan ini hanya mengenai SATU elemen. Prioritasnya lebih tinggi dari class — berguna untuk elemen spesifik seperti #header, tapi untuk styling umum lebih baik pakai class.',
    code: `#judul-utama {
    font-size: 40px;
}

<h1 id="judul-utama">Judul</h1>`,
    explanation: '#judul-utama hanya mengenai satu elemen — id tidak boleh kembar.' },
  { question: 'Apa fungsi universal selector dan attribute selector?', difficulty: 'Intermediate', category: 'Selector',
    answer: 'Universal selector * mengenai SEMUA elemen — sering dipakai untuk reset (mis. box-sizing). Attribute selector [nama="nilai"] mengenai elemen yang punya attribute tertentu — praktis untuk memilih input berdasarkan type tanpa menambah class.',
    code: `* {
    box-sizing: border-box;
}

input[type="email"] {
    border-color: teal;
}`,
    explanation: 'input[type="email"] hanya mengenai input email — input text tidak.' },
  { question: 'Bagaimana mengatur warna teks dan latar belakang?', difficulty: 'Beginner', category: 'Warna & Tipografi',
    answer: 'color mengatur warna TEKS; background-color mengatur warna LATAR elemen. Warna bisa ditulis dengan nama (red), hex (#ff0000), atau rgb/rgba — rgba punya nilai transparansi ke-4 (0–1).',
    code: `.kartu {
    color: #e9edf3;
    background-color: rgba(255, 212, 59, 0.1);
}`,
    explanation: 'rgba(..., 0.1) = warna kuning dengan transparansi 10%.' },
  { question: 'Bagaimana mengatur font-family dan font-size?', difficulty: 'Beginner', category: 'Warna & Tipografi',
    answer: 'font-family menentukan jenis huruf — tulis beberapa sebagai cadangan; jika font pertama tak tersedia, browser pakai berikutnya. font-size menentukan ukuran. Font kustom dimuat lewat @import atau <link> Google Fonts.',
    code: `body {
    font-family: "Space Grotesk", "Segoe UI", sans-serif;
    font-size: 16px;
}

h1 {
    font-size: 2rem;
}`,
    explanation: 'sans-serif adalah fallback terakhir — selalu ada di semua device.' },
  { question: 'Bagaimana mengatur font-weight dan text-align?', difficulty: 'Beginner', category: 'Warna & Tipografi',
    answer: 'font-weight mengatur ketebalan (400 normal, 700 bold, atau nilai 100–900 tergantung font). text-align mengatur perataan teks horizontal: left, center, right, atau justify.',
    code: `h1 { font-weight: 700; }
.nilai { text-align: center; }
.kutipan { text-align: right; font-weight: 500; }`,
    explanation: '400 = normal, 700 = bold — angka memberi kontrol lebih halus.' },
  { question: 'Apa bedanya margin dan padding?', difficulty: 'Beginner', category: 'Box Model',
    answer: 'Padding adalah ruang DI DALAM elemen — antara konten dan border-nya sendiri; membuat isi terasa lega. Margin adalah ruang DI LUAR elemen — jarak antara elemen ini dan tetangganya. Padding mewarnai latar elemen, margin tidak.',
    code: `.tombol {
    padding: 12px 24px;   /* ruang dalam */
    margin: 16px;         /* jarak ke elemen lain */
    background: #ffd43b;
}`,
    explanation: ['padding: 12px 24px = 12px atas-bawah, 24px kiri-kanan.', 'Margin transparan — hanya mendorong elemen lain.'] },
  { question: 'Bagaimana cara membuat border?', difficulty: 'Beginner', category: 'Box Model',
    answer: 'border menggambar garis tepi elemen: tebal, gaya, warna. Gaya populer: solid, dashed, dotted. Kamu juga bisa mengatur satu sisi saja dengan border-left, border-top, dst — sering dipakai untuk aksen seperti garis kuning di kiri kartu.',
    code: `.kartu {
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.aksen {
    border: none;
    border-left: 3px solid #ffd43b;
}`,
    explanation: 'border-left: 3px solid #ffd43b menggambar garis hanya di sisi kiri.' },
  { question: 'Bagaimana mengatur width dan height?', difficulty: 'Beginner', category: 'Box Model',
    answer: 'width/height mengatur lebar/tinggi area konten. Praktik terbaik: gunakan max-width daripada width untuk container — di layar kecil elemen mengecil otomatis, di layar besar berhenti di batas maksimum.',
    code: `.container {
    max-width: 900px;   /* tidak lebih lebar dari ini */
    margin: 0 auto;     /* center horizontal */
}`,
    explanation: 'margin: 0 auto = trik klasik membuat elemen berada di tengah.' },
  { question: 'Apa itu box model?', difficulty: 'Beginner', category: 'Box Model',
    answer: 'Setiap elemen HTML adalah kotak yang terdiri dari 4 lapis: content (isi) → padding (ruang dalam) → border (garis tepi) → margin (ruang luar). Memahami box model = memahami kenapa elemen berukuran lebih besar dari yang kamu kira.',
    code: `.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Ukuran total = 200 + 20+20 + 5+5 = 250px! */
}`,
    explanation: 'Lebar asli di layar: 200 (content) + 40 (padding) + 10 (border) = 250px.' },
  { question: 'Apa fungsi box-sizing: border-box?', difficulty: 'Intermediate', category: 'Box Model',
    answer: 'Secara default, width hanya menghitung content — padding dan border menambah ukuran total (box model mengejutkan!). box-sizing: border-box membuat width SUDAH termasuk padding + border, sehingga ukuran elemen jadi mudah diprediksi. Hampir semua project menyetelnya global.',
    code: `* {
    box-sizing: border-box;
}

.box {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    /* Sekarang totalnya TETAP 200px */
}`,
    explanation: 'Dengan border-box, content menyusut otomatis agar total tetap 200px.' },
  { question: 'Apa itu property display dan nilai-nilainya?', difficulty: 'Intermediate', category: 'Display & Layout',
    answer: 'display menentukan bagaimana elemen berperilaku dan bagaimana anak-anaknya tersusun. Nilai utama: block (baris sendiri), inline (menyusur teks), inline-block (campuran), flex (susunan 1 dimensi), grid (susunan 2 dimensi), dan none (menghilang total).',
    code: `.tersembunyi { display: none; }     /* hilang dari layout */
.tengah { display: flex; }          /* anak-anaknya fleksibel */
.gambar { display: block; }         /* memulai baris sendiri */`,
    explanation: 'display: none berbeda dari visibility: hidden — yang terakhir masih memakan ruang.' },
  { question: 'Apa bedanya elemen block dan inline?', difficulty: 'Beginner', category: 'Display & Layout',
    answer: 'Block (div, p, h1): memenuhi lebar penuh, memulai baris baru, dan bisa diberi width/height. Inline (span, a, strong): hanya selebar isi, sejajar dalam satu baris, dan TIDAK bisa diberi width/height. inline-block menggabungkan keduanya: sejajar tapi bisa diatur ukurannya.',
    code: `<div>Aku block — mengambil baris sendiri.</div>
<span>Aku inline,</span> <span>aku menyusur sebaris.</span>

.badge { display: inline-block; width: 100px; }`,
    explanation: 'Kalau width tidak berpengaruh pada elemen — kemungkinan itu elemen inline.' },
  { question: 'Apa fungsi display: flex dalam CSS?', difficulty: 'Beginner', category: 'Flexbox',
    answer: 'display: flex membuat sebuah element menjadi flex container sehingga child element dapat diatur menggunakan sistem Flexbox — sistem penataan satu dimensi yang sangat fleksibel: sejajar, berjarak rata, atau menempel tengah.',
    code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
    explanation: ['justify-content mengatur posisi pada main axis.', 'align-items mengatur posisi pada cross axis.'] },
  { question: 'Bagaimana konsep main axis dan cross axis di Flexbox?', difficulty: 'Intermediate', category: 'Flexbox',
    answer: 'Flex container punya dua sumbu. Main axis = arah utama anak-anak tersusun (horizontal secara default). Cross axis = arah tegak lurusnya. Mengubah flex-direction: column membalik keduanya — ini kunci memahami kenapa justify-content tiba-tiba mengatur arah vertikal.',
    code: `.container {
    display: flex;
    flex-direction: column;  /* main axis jadi vertikal */
    justify-content: center; /* sekarang mengatur VERTIKAL */
}`,
    explanation: 'Selalu tanya dulu: "main axis-nya ke arah mana?" — baru atur justify/align.' },
  { question: 'Bagaimana cara kerja justify-content?', difficulty: 'Beginner', category: 'Flexbox',
    answer: 'justify-content mengatur penempatan anak-anak flex sepanjang MAIN axis. Nilai populer: flex-start (kiri), flex-end (kanan), center (tengah), space-between (mentok kiri-kanan, sisa di tengah), space-around / space-evenly (jarak merata).',
    code: `.container {
    display: flex;
    justify-content: space-between;
}

/* [item]        [item]        [item] */`,
    explanation: 'space-between = item pertama & terakhir mentok ke tepi, sisanya terdistribusi.' },
  { question: 'Bagaimana cara kerja align-items?', difficulty: 'Beginner', category: 'Flexbox',
    answer: 'align-items mengatur penempatan anak-anak sepanjang CROSS axis (tegak lurus main axis). Nilai populer: stretch (default — anak memanjang penuh), flex-start (atas), flex-end (bawah), center (tengah vertikal).',
    code: `.container {
    display: flex;
    align-items: center;   /* semua anak rata tengah VERTIKAL */
    height: 200px;
}`,
    explanation: 'Kombinasi justify-content: center + align-items: center = center sempurna 2 arah.' },
  { question: 'Apa fungsi gap pada Flexbox dan Grid?', difficulty: 'Beginner', category: 'Flexbox',
    answer: 'gap memberi jarak ANTAR anak-anak flex/grid tanpa perlu margin pada tiap item. Jauh lebih bersih daripada trik lama margin kiri-kanan yang menimbulkan kelebihan jarak di tepi. Bisa satu nilai, atau dua (baris kolom).',
    code: `.container {
    display: flex;
    gap: 16px;
    /* atau: gap: 16px 24px; → baris kolom */
}`,
    explanation: 'gap menghitung jarak hanya di ANTARA item — tepi container tetap bersih.' },
  { question: 'Apa itu CSS Grid dan kapan menggunakannya?', difficulty: 'Intermediate', category: 'Grid',
    answer: 'Grid adalah sistem layout DUA dimensi: kamu mengatur baris DAN kolom sekaligus. Definisikan kolom dengan grid-template-columns — fr berarti "fraksi dari ruang tersedia". Grid paling pas untuk layout halaman keseluruhan (header-sidebar-konten-footer).',
    code: `.layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr;
    gap: 16px;
}`,
    explanation: ['1fr = satu fraksi ruang tersisa.', 'Layout ini: sidebar 250px + konten fleksibel.'] },
  { question: 'Apa bedanya Flexbox dan Grid?', difficulty: 'Intermediate', category: 'Grid',
    answer: 'Flexbox = SATU dimensi: susunan sebaris ATAU sekolom, ukuran item bisa fleksibel — terbaik untuk KOMPONEN (navbar, tombol berjajar, kartu). Grid = DUA dimensi: baris DAN kolom sekaligus — terbaik untuk LAYOUT halaman. Keduanya sering dipakai bersama: Grid untuk halaman, Flexbox untuk isi di dalamnya.',
    code: `.halaman { display: grid; }          /* layout 2D */
.navbar  { display: flex; gap: 12px; } /* komponen 1D */`,
    explanation: 'Aturan praktis: layout halaman → Grid; isi dalam komponen → Flexbox.' },
  { question: 'Apa saja nilai position dan apa artinya?', difficulty: 'Intermediate', category: 'Positioning',
    answer: 'static (default, mengikuti alur normal), relative (bergeser dari posisi normal), absolute (lepas dari alur, menempel ke ancestor ber-position), fixed (menempel ke layar), sticky (normal lalu menempel saat di-scroll). Dipadukan dengan top/right/bottom/left.',
    code: `.badge {
    position: absolute;
    top: 8px;
    right: 8px;
}`,
    explanation: 'Tanpa top/right/bottom/left, position hampir tidak berefek.' },
  { question: 'Apa bedanya position: relative dan absolute?', difficulty: 'Intermediate', category: 'Positioning',
    answer: 'relative: elemen bergeser dari posisi normalnya, tetapi ruang aslinya DIPERTAHANKAN (tetangga tidak ikut bergeser). absolute: elemen lepas sepenuhnya dari alur (ruangnya hilang) dan diposisikan relatif ke ancestor terdekat yang punya position selain static.',
    code: `.kartu { position: relative; }        /* jadi acuan */

.badge {
    position: absolute;   /* menempel ke .kartu */
    top: 0; right: 0;
}`,
    explanation: 'Pola klasik: parent relative + child absolute = child menempel di pojok parent.' },
  { question: 'Apa bedanya position: fixed dan sticky?', difficulty: 'Intermediate', category: 'Positioning',
    answer: 'fixed: elemen menempel ke VIEWPORT (layar) — tidak ikut bergerak saat di-scroll, seperti tombol chat melayang atau overlay. sticky: elemen berperilaku normal dulu, lalu MENEMPEL ketika scroll mencapai offset yang ditentukan — seperti navbar yang mengikuti ke bawah.',
    code: `.tombol-chat {
    position: fixed;
    bottom: 24px; right: 24px;
}

.navbar {
    position: sticky;
    top: 0;   /* menempel saat mencapai atas layar */
}`,
    explanation: 'sticky butuh nilai top — tanpa itu ia berperilaku seperti relative.' },
  { question: 'Apa fungsi z-index?', difficulty: 'Intermediate', category: 'Positioning',
    answer: 'z-index menentukan urutan tumpukan elemen yang saling menutupi — elemen dengan nilai lebih besar tampil di atas. Hanya berpengaruh pada elemen ber-position (selain static). Elemen tanpa z-index mengikuti urutan penulisan di HTML.',
    code: `.modal  { position: fixed; z-index: 100; }
.navbar { position: sticky; z-index: 50; }

/* modal selalu tampil di atas navbar */`,
    explanation: 'z-index tidak berefek pada elemen position: static.' },
  { question: 'Apa itu pseudo-class :hover dan :focus?', difficulty: 'Beginner', category: 'Pseudo & Variabel',
    answer: 'Pseudo-class menyeleksi elemen berdasarkan KEADAAN, bukan strukturnya. :hover saat kursor berada di atas elemen; :focus saat elemen menerima fokus keyboard (input aktif). Inilah dasar semua efek hover pada tombol dan link.',
    code: `.tombol {
    background: #1b222c;
    transition: background .2s;
}
.tombol:hover  { background: #2a3340; }
.tombol:focus  { outline: 2px solid #ffd43b; }`,
    explanation: ['transition membuat perubahan hover terasa halus.', ':focus penting untuk pengguna keyboard.'] },
  { question: 'Apa itu pseudo-element ::before dan ::after?', difficulty: 'Intermediate', category: 'Pseudo & Variabel',
    answer: 'Pseudo-element membuat elemen "bayangan" sebelum/after isi elemen asli — murni lewat CSS, tanpa menambah HTML. WAJIB memakai property content (bisa string atau ""). Dipakai untuk dekorasi: badge, garis aksen, tanda kutip.',
    code: `.wajib::after {
    content: " *";
    color: #ff6b6b;
}

.tanda::before {
    content: "› ";
    color: #ffd43b;
}`,
    output: `Nama *        › Selesai`,
    explanation: 'Tanpa content, ::before/::after tidak akan muncul sama sekali.' },
  { question: 'Apa itu CSS variables dan apa kegunanya?', difficulty: 'Intermediate', category: 'Pseudo & Variabel',
    answer: 'CSS variables menyimpan nilai yang bisa dipakai ulang di seluruh stylesheet: --nama: nilai; lalu pakai var(--nama). Manfaatnya: ganti warna tema di SATU tempat saja, dan bisa diubah lewat JavaScript untuk dark mode.',
    code: `:root {
    --accent: #ffd43b;
    --radius: 12px;
}

.tombol {
    background: var(--accent);
    border-radius: var(--radius);
}`,
    explanation: 'Mengubah --accent di :root mengubah semua elemen yang memakainya.' },
  { question: 'Apa itu responsive design dan media query?', difficulty: 'Intermediate', category: 'Responsif',
    answer: 'Responsive design = halaman menyesuaikan diri di semua ukuran layar. Alat utamanya media query: blok CSS yang hanya aktif ketika kondisi layar terpenuhi. Pola umum: tulis style mobile dulu, lalu tambahkan penyesuaian untuk layar lebih lebar.',
    code: `.container {
    padding: 16px;      /* mobile (default) */
}

@media (min-width: 768px) {
    .container {
        padding: 32px;  /* tablet ke atas */
    }
}`,
    explanation: 'min-width = "mulai dari lebar ini" — pendekatan mobile-first.' },
  { question: 'Apa bedanya unit px, %, rem, em, vh, dan vw?', difficulty: 'Intermediate', category: 'Responsif',
    answer: 'px: ukuran tetap (piksel). %: relatif terhadap parent. rem: relatif ke font-size root (html) — konsisten di seluruh halaman, terbaik untuk font & spacing. em: relatif ke font-size elemen itu sendiri. vh/vw: persentase tinggi/lepa layar — penuh satu layar = 100vh.',
    code: `html { font-size: 16px; }

h1     { font-size: 2rem; }   /* 32px */
.hero  { height: 100vh; }     /* setinggi layar */
.badge { padding: 0.5em 1em; } /* ikut ukuran font badge */`,
    explanation: 'rem lebih diprediksi daripada em karena tidak menumpuk dari parent.' },
  { question: 'Bagaimana cara kerja transition?', difficulty: 'Beginner', category: 'Animasi & Efek',
    answer: 'transition membuat perubahan nilai property berjalan MULUS selama durasi tertentu, bukan berubah mendadak. Format singkat: transition: property durasi timing. Bisa juga all untuk semua property. Trigger-nya biasanya :hover atau perubahan class oleh JavaScript.',
    code: `.tombol {
    background: #1b222c;
    transform: translateY(0);
    transition: background .2s ease, transform .2s ease;
}
.tombol:hover {
    background: #2a3340;
    transform: translateY(-2px);
}`,
    explanation: 'transition ditulis pada keadaan AWAL, bukan di dalam :hover.' },
  { question: 'Apa fungsi transform?', difficulty: 'Intermediate', category: 'Animasi & Efek',
    answer: 'transform menggerakkan/mengubah elemen tanpa mengganggu layout tetangganya: translate (geser), scale (perbesar), rotate (putar), skew (miring). Karena tidak memicu reflow, transform sangat performant untuk animasi — dipadukan dengan transition untuk efek halus.',
    code: `.kartu:hover {
    transform: translateY(-4px) scale(1.02);
}

.ikon-diputar {
    transform: rotate(90deg);
}`,
    explanation: 'translateY(-4px) = naik 4px; nilai negatif berarti ke atas.' },
  { question: 'Bagaimana membuat animation dengan @keyframes?', difficulty: 'Intermediate', category: 'Animasi & Efek',
    answer: 'Animation berjalan OTOMATIS saat elemen muncul (tidak perlu trigger seperti transition). Definisikan tahap animasi di @keyframes (from/to atau persentase), lalu pasang lewat property animation: nama durasi timing iterasi.',
    code: `@keyframes fade-up {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
}

.kartu {
    animation: fade-up .4s ease;
}`,
    explanation: 'from/to untuk 2 tahap; pakai 0%/50%/100% untuk tahap lebih banyak.' },
  { question: 'Bagaimana menggunakan box-shadow dan border-radius?', difficulty: 'Beginner', category: 'Animasi & Efek',
    answer: 'box-shadow memberi bayangan: offset-x offset-y blur warna — menciptakan kesan kedalaman/premium. border-radius membulatkan sudut (atau membuat pill dengan 999px). Keduanya murah performa-nya dan langsung mengubah kesan visual UI.',
    code: `.kartu {
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, .3);
    transition: box-shadow .2s;
}
.kartu:hover {
    box-shadow: 0 16px 40px rgba(0, 0, 0, .45);
}`,
    explanation: 'Format shadow: geser-x geser-y keblur-an warna(transparan).' }
],

/* ────────────────────────────────────────────────────────────
   JAVASCRIPT (36 kartu)
   ──────────────────────────────────────────────────────────── */
javascript: [
  { question: 'Apa itu JavaScript?', difficulty: 'Beginner', category: 'JS Basics',
    answer: 'JavaScript adalah bahasa pemrograman yang berjalan di browser, membuat halaman menjadi interaktif: merespons klik, memvalidasi form, mengubah isi halaman tanpa reload, dan mengambil data dari server. HTML = struktur, CSS = tampilan, JS = perilaku.',
    code: `document.querySelector('button')
    .addEventListener('click', () => {
        alert('Tombol diklik!');
    });`,
    explanation: 'Baris ini bereaksi ketika user menekan tombol — HTML/CSS tidak bisa melakukan ini.' },
  { question: 'Bagaimana membuat variabel dengan let?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'let mendeklarasikan variabel yang nilainya BOLEH diubah (reassign) — dan hanya hidup di dalam blok tempat ia dideklarasikan (block scope). Nama variabel case-sensitive: skor dan Skor itu berbeda.',
    code: `let skor = 0;
console.log(skor);

skor = 100;      // reassign: boleh
console.log(skor);`,
    output: `0
100`,
    explanation: 'let cocok untuk nilai yang memang berubah: counter, status, input user.' },
  { question: 'Apa bedanya let dan const?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'const tidak bisa di-reassign setelah diberi nilai; let bisa. Keduanya sama-sama block-scoped. Praktik terbaik modern: gunakan const secara DEFAULT, dan ganti ke let hanya ketika nilainya memang perlu berubah — kode jadi lebih mudah diprediksi.',
    code: `const PI = 3.14;
let total = 0;

total = total + 10;  // OK
PI = 3.15;           // TypeError! const tak bisa diubah`,
    output: `TypeError: Assignment to constant variable.`,
    explanation: 'Isi object const masih bisa berubah — yang terkunci hanya variabelnya, bukan isinya.' },
  { question: 'Kapan sebaiknya tidak memakai var?', difficulty: 'Intermediate', category: 'Variabel & Tipe',
    answer: 'Hampir selalu. var adalah cara lama dengan dua jebakan: scopenya per FUNCTION (bukan per blok) dan nilainya "terangkat" (hoisting) sehingga bisa diakses sebelum deklarasinya. let/const tidak punya masalah ini. var hanya kamu temui di kode lama.',
    code: `if (true) {
    var tua = "bocor keluar blok";
    let baru = "aman di dalam blok";
}
console.log(tua);   // masih bisa diakses (jebakan!)
console.log(baru);  // ReferenceError (benar!)`,
    output: `bocor keluar blok
ReferenceError: baru is not defined`,
    explanation: 'var mengabaikan blok {} — let menghormatinya.' },
  { question: 'Bagaimana string dan template literals bekerja?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'String ditulis dengan kutip satu/dua. Template literal memakai backtick ` dan bisa menyisipkan variabel/ekspresi langsung di dalam ${} — serta mendukung multi-baris tanpa perlu escape.',
    code: "const nama = 'Budi';\nconst umur = 25;\n\nconst kalimat = `Halo, ${nama}! Tahun depan umurmu ${umur + 1}.`;\nconsole.log(kalimat);",
    output: `Halo, Budi! Tahun depan umurmu 26.`,
    explanation: 'Ekspresi apa pun (umur + 1) bisa dihitung langsung di dalam ${}.' },
  { question: 'Apa itu Number dan Boolean di JavaScript?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'JavaScript hanya punya SATU tipe angka: Number (dobel presisi) — tidak ada int/float terpisah. Boolean bernilai true/false dan menjadi dasar semua kondisi if. Waspadai pembulatan desimal, masalah klasik floating point.',
    code: `const umur = 25;          // Number
const harga = 15000.5;    // tetap Number
const aktif = true;       // Boolean

console.log(0.1 + 0.2);  // jebakan floating point!`,
    output: `0.30000000000000004`,
    explanation: '0.1 + 0.2 !== 0.3 — sifat floating point, bukan bug JavaScript-mu.' },
  { question: 'Apa itu array dan bagaimana menggunakannya?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'Array adalah kumpulan nilai terurut dalam kurung siku, diakses lewat index mulai dari 0. JavaScript array fleksibel: boleh campur tipe data, dan panjangnya bisa bertambah/berkurang (mutable).',
    code: `const buah = ['apel', 'jeruk', 'mangga'];

console.log(buah[0]);        // index 0 = elemen pertama
console.log(buah.length);    // jumlah elemen
buah[1] = 'pisang';          // ganti elemen
console.log(buah);`,
    output: `apel
3
['apel', 'pisang', 'mangga']`,
    explanation: 'Index terakhir selalu length - 1.' },
  { question: 'Apa itu object dan bagaimana mengakses propertinya?', difficulty: 'Beginner', category: 'Object',
    answer: 'Object menyimpan data berlabel: pasangan key → value dalam kurung kurawal. Akses properti dengan dot (obj.key) atau bracket (obj["key"]) — bracket wajib saat key ada di variabel atau mengandung karakter khusus.',
    code: `const siswa = {
    nama: 'Dewi',
    umur: 19,
    kota: 'Bandung'
};

console.log(siswa.nama);        // dot
const key = 'umur';
console.log(siswa[key]);        // bracket (key dari variabel)
siswa.umur = 20;                // ubah properti`,
    output: `Dewi
19`,
    explanation: 'Kalau key-nya dari variabel, dot notation TIDAK bisa dipakai — gunakan bracket.' },
  { question: 'Apa bedanya null dan undefined?', difficulty: 'Beginner', category: 'Variabel & Tipe',
    answer: 'undefined = sistem berkata "belum ada nilai": variabel dideklarasikan tanpa nilai, properti yang tidak ada, function tanpa return. null = programmer SENGAJA mengosongkan: "nilai ini memang kosong". null harus di-assign secara eksplisit.',
    code: `let nama;                    // undefined (belum diisi)
console.log(nama);

const user = { umur: 25 };
console.log(user.nama);       // undefined (tidak ada properti)

const pilihan = null;          // sengaja dikosongkan
console.log(pilihan);`,
    output: `undefined
undefined
null`,
    explanation: 'undefined datang dari sistem; null datang dari keputusanmu.' },
  { question: 'Bagaimana cara kerja if / else di JavaScript?', difficulty: 'Beginner', category: 'Kontrol Alur',
    answer: 'if menjalankan blok ketika kondisinya truthy; else jika salah; else if untuk kondisi berantai. Kondisi tidak harus boolean — JavaScript mengonversi nilai lain (0, "", null, undefined, NaN = falsy; selebihnya truthy).',
    code: `const nilai = 78;

if (nilai >= 90) {
    console.log('A');
} else if (nilai >= 75) {
    console.log('B');
} else {
    console.log('C');
}`,
    output: `B`,
    explanation: 'Blok pertama yang kondisinya benar yang dijalankan — sisanya dilewati.' },
  { question: 'Bagaimana menggunakan for dan while loop?', difficulty: 'Beginner', category: 'Kontrol Alur',
    answer: 'for loop klasik punya 3 bagian: inisialisasi; kondisi; perubahan — cocok bila jumlah iterasi diketahui. while mengulang selama kondisi benar — cocok bila jumlahnya tidak pasti. Ada juga for...of untuk me-loop isi array secara langsung.',
    code: `for (let i = 0; i < 3; i++) {
    console.log(i);
}

const buah = ['apel', 'jeruk'];
for (const item of buah) {
    console.log(item);
}`,
    output: `0
1
2
apel
jeruk`,
    explanation: 'for...of lebih ringkas dan aman daripada for klasik untuk array.' },
  { question: 'Apa itu function di JavaScript?', difficulty: 'Beginner', category: 'Function',
    answer: 'Function adalah blok kode reusable dengan nama. Versi modern memakai kata kunci function biasa ATAU arrow function. Function membantu menyusun logika, menghindari duplikasi, dan membuat kode mudah diuah — konsep yang sama seperti di Python.',
    code: `function tambah(a, b) {
    return a + b;
}

console.log(tambah(10, 20));`,
    output: `30`,
    explanation: 'return mengirim nilai keluar; tanpa return, function menghasilkan undefined.' },
  { question: 'Apa itu arrow function dan bedanya dengan function biasa?', difficulty: 'Beginner', category: 'Function',
    answer: 'Arrow function adalah penulisan function yang lebih ringkas: (argumen) => ekspresi. Jika body hanya satu ekspresi, return terjadi otomatis dan kurung kurawal tidak perlu. Sangat populer untuk callback (argumen map, filter, addEventListener).',
    code: `// function biasa
function kuadrat(x) { return x * x; }

// arrow function — hasil sama persis
const kuadrat2 = (x) => x * x;

console.log(kuadrat(5), kuadrat2(5));`,
    output: `25 25`,
    explanation: 'Saat body hanya satu ekspresi, return-nya implisit — tanpa kata return.' },
  { question: 'Apa bedanya parameter dan argument?', difficulty: 'Beginner', category: 'Function',
    answer: 'Parameter adalah variabel penampung di DEFINISI function; argument adalah nilai NYATA yang dikirim saat MEMANGGIL function. JavaScript juga mendukung default parameter — nilai cadangan saat argument tidak dikirim.',
    code: `function sapa(nama = 'Teman') {   // nama = parameter
    console.log('Halo, ' + nama);
}

sapa('Budi');   // 'Budi' = argument
sapa();         // argument kosong → pakai default`,
    output: `Halo, Budi
Halo, Teman`,
    explanation: "nama = 'Teman' adalah default parameter." },
  { question: 'Apa bedanya return dan console.log()?', difficulty: 'Beginner', category: 'Function',
    answer: 'console.log hanya MENAMPILKAN nilai ke console — nilainya tidak bisa dipakai lagi. return MENGIRIM nilai keluar dari function sehingga bisa disimpan di variabel dan dihitung lanjut. Bug klasik pemula: lupa return, lalu hasilnya undefined.',
    code: `const kuadrat = (x) => x * x;     // mengembalikan nilai

const hasil = kuadrat(5);
console.log(hasil + 1);           // bisa dihitung lanjut`,
    output: `26`,
    explanation: 'Kalau hasil function-mu undefined, cek: apakah lupa return?' },
  { question: 'Apa itu scope di JavaScript?', difficulty: 'Intermediate', category: 'Function',
    answer: 'Scope adalah "wilayah hidup" variabel. Global scope: variabel bisa diakses dari mana saja (sebisa mungkin dihindari). Function scope: hanya di dalam function. Block scope (let/const): hanya di dalam {} — if, loop, dsb. Variabel di luar scope = ReferenceError.',
    code: `const global = 'aku terlihat semua';

function cek() {
    const lokal = 'aku hanya di sini';
    console.log(global, lokal);
}

cek();
console.log(lokal);   // error! di luar scope`,
    output: `aku terlihat semua aku hanya di sini
ReferenceError: lokal is not defined`,
    explanation: 'Semakin sempit scope, semakin aman kode — nama tidak bentrok antar bagian.' },
  { question: 'Apa bedanya === dan ==?', difficulty: 'Beginner', category: 'Operator',
    answer: '== membandingkan SETELAH mengonversi tipe ("5" == 5 → true) — hasilnya sering mengejutkan. === membandingkan nilai DAN tipe tanpa konversi ("5" === 5 → false). Aturan praktis: selalu gunakan === agar perbandingan jelas dan bebas bug.',
    code: `console.log(5 == "5");    // konversi terjadi
console.log(5 === "5");   // tipe beda → false
console.log(0 == false);  // jebakan!
console.log(0 === false); // aman`,
    output: `true
false
true
false`,
    explanation: '== melakukan type coercion; === menghormati perbedaan tipe.' },
  { question: 'Bagaimana cara kerja operator &&, ||, dan !?', difficulty: 'Beginner', category: 'Operator',
    answer: '&& (AND): hasil true jika semua benar. || (OR): true jika minimal satu benar. ! (NOT): membalik nilai. JavaScript versi modern juga memakai || dan && sebagai "pemilih nilai": a || b menghasilkan a jika truthy, selain itu b.',
    code: `const umur = 20, member = true;

console.log(umur >= 17 && member);   // semua benar?
console.log(umur < 17 || member);    // salah satu benar?
console.log(!member);                // balik

const nama = '' || 'Tamu';           // '' falsy → 'Tamu'
console.log(nama);`,
    output: `true
true
false
Tamu`,
    explanation: "a || b sangat praktis untuk nilai cadangan (fallback)." },
  { question: 'Bagaimana cara kerja map()?', difficulty: 'Beginner', category: 'Array Methods',
    answer: 'map() membuat array BARU dengan hasil transformasi tiap elemen — array asli tidak berubah. Ia menerima callback yang dipanggil sekali per elemen. Ini cara deklaratif mengubah seluruh isi array tanpa for loop manual.',
    code: `const angka = [1, 2, 3, 4];

const kali2 = angka.map((n) => n * 2);
console.log(kali2);
console.log(angka);   // asli tetap utuh`,
    output: `[2, 4, 6, 8]
[1, 2, 3, 4]`,
    explanation: 'Callback menerima juga (nilai, index) — index berguna untuk kebutuhan lanjutan.' },
  { question: 'Apa bedanya map() dan forEach()?', difficulty: 'Intermediate', category: 'Array Methods',
    answer: 'map() MENGEMBALIKAN array baru — dipakai ketika kamu butuh hasil transformasi. forEach() hanya berjalan melewati tiap elemen dan mengembalikan undefined — dipakai untuk efek samping seperti menampilkan atau mengirim data. Kesalahan umum: memakai forEach lalu menyimpan hasilnya.',
    code: `const angka = [1, 2, 3];

const hasil1 = angka.map((n) => n * 2);       // [2, 4, 6]
const hasil2 = angka.forEach((n) => n * 2);    // undefined!

console.log(hasil1, hasil2);`,
    output: `[2, 4, 6] undefined`,
    explanation: 'Butuh array hasil? map. Hanya ingin melakukan sesuatu per elemen? forEach.' },
  { question: 'Bagaimana cara kerja filter()?', difficulty: 'Beginner', category: 'Array Methods',
    answer: 'filter() membuat array baru berisi hanya elemen yang lolos kondisi — callback mengembalikan true/false per elemen. Sama seperti map, array asli tidak berubah. Kombinasi filter + map adalah pola paling sering dipakai pengolahan data.',
    code: `const angka = [1, 2, 3, 4, 5, 6];

const genap = angka.filter((n) => n % 2 === 0);
console.log(genap);

// rantai: saring lalu ubah
const hasil = angka.filter((n) => n > 3).map((n) => n * 10);
console.log(hasil);`,
    output: `[2, 4, 6]
[40, 50, 60]`,
    explanation: 'Callback yang mengembalikan truthy = elemen lolos saringan.' },
  { question: 'Bagaimana cara kerja find()?', difficulty: 'Beginner', category: 'Array Methods',
    answer: 'find() mengembalikan ELEMEN PERTAMA yang memenuhi kondisi — bukan array. Jika tidak ada yang cocok, hasilnya undefined. Pasangannya findIndex() mengembalikan posisi index. Sangat berguna mencari satu objek di dalam array object.',
    code: `const siswa = [
    { nama: 'Budi', nilai: 82 },
    { nama: 'Ani',  nilai: 95 },
    { nama: 'Cita', nilai: 78 }
];

const juara = siswa.find((s) => s.nilai >= 90);
console.log(juara.nama);`,
    output: `Ani`,
    explanation: 'find berhenti di elemen pertama yang cocok — tidak memeriksa sisanya.' },
  { question: 'Bagaimana push() dan pop() bekerja?', difficulty: 'Beginner', category: 'Array Methods',
    answer: 'push() menambah elemen di AKHIR array dan mengembalikan panjang baru. pop() melepaskan elemen TERAKHIR sekaligus mengembalikannya. Pasangannya unshift()/shift() bekerja di awal array. Keempatnya mengubah array asli (mutating).',
    code: `const tumpukan = [];

tumpukan.push('a', 'b');       // tambah di akhir
tumpukan.push('c');
console.log(tumpukan);

const diambil = tumpukan.pop(); // ambil dari akhir
console.log(diambil, tumpukan);`,
    output: `['a', 'b', 'c']
c ['a', 'b']`,
    explanation: 'push + pop = pola stack (tumpukan); push + shift = pola queue (antrean).' },
  { question: 'Apa itu destructuring?', difficulty: 'Intermediate', category: 'Object',
    answer: 'Destructuring mengambil isi array/object langsung ke variabel terpisah dalam satu baris — menggantikan akses properti berulang. Bekerja untuk array (berdasarkan posisi) dan object (berdasarkan nama key), lengkap dengan nilai default.',
    code: `const siswa = { nama: 'Dewi', umur: 19, kota: 'Bandung' };

const { nama, umur } = siswa;         // object destructuring
console.log(nama, umur);

const [pertama, kedua] = ['apel', 'jeruk', 'mangga'];
console.log(pertama, kedua);          // array destructuring`,
    output: `Dewi 19
apel jeruk`,
    explanation: 'Nama variabel harus sama dengan key object; urutan mengikuti posisi pada array.' },
  { question: 'Apa itu spread operator (...)?', difficulty: 'Intermediate', category: 'Object',
    answer: 'Spread (...) "membongkar" isi array/object. Dipakai untuk: menyalin tanpa mutasi, menggabungkan array/object, dan mengirim array sebagai kumpulan argument. Titik tiga sebelum variabel — kebalikan destructuring yang justru "mengemas".',
    code: `const a = [1, 2];
const b = [...a, 3, 4];           // gabung array
console.log(b);

const user = { nama: 'Budi', umur: 25 };
const update = { ...user, umur: 26 };  // salin + timpa
console.log(update);`,
    output: `[1, 2, 3, 4]
{ nama: 'Budi', umur: 26 }`,
    explanation: 'Key yang ditulis belakangan menimpa key dari spread — trik update object.' },
  { question: 'Apa itu DOM dan bagaimana memilih elemen?', difficulty: 'Beginner', category: 'DOM & Events',
    answer: 'DOM (Document Object Model) adalah representasi halaman HTML sebagai object JavaScript — pohon node yang bisa dibaca dan diubah. Pilih elemen dengan document.querySelector("selektor-css") (fleksibel: class, id, tag, nested) atau document.getElementById("id") (khusus id, paling cepat).',
    code: `const judul = document.querySelector('#judul');
const kartu = document.querySelector('.kartu');
const semuaBtn = document.querySelectorAll('button');

judul.textContent = 'Judul baru dari JS!';`,
    explanation: 'querySelector menerima selektor CSS apa pun — "#id", ".class", "nav a".' },
  { question: 'Bagaimana memanipulasi class dengan classList?', difficulty: 'Beginner', category: 'DOM & Events',
    answer: 'classList adalah cara aman mengatur class elemen: add(), remove(), toggle() (hidup-mati), contains() (cek). Jauh lebih baik daripada mengubah string className manual. Inilah jembatan antara JavaScript dan styling CSS-mu.',
    code: `const kartu = document.querySelector('.kartu');

kartu.classList.add('aktif');
kartu.classList.toggle('mode-gelap');   // toggle: on ↔ off

if (kartu.classList.contains('aktif')) {
    kartu.classList.remove('aktif');
}`,
    explanation: 'Toggle adalah pola standar untuk membuka/menutup menu dan dark mode.' },
  { question: 'Apa bedanya innerHTML dan textContent?', difficulty: 'Beginner', category: 'DOM & Events',
    answer: 'innerHTML mem-parse string sebagai HTML — bisa menyisipkan tag, tapi BERBAHAYA jika teksnya dari user (serangan XSS). textContent mengatur teks polos apa adanya — aman dan lebih cepat. Aturan: data dari user → selalu textContent.',
    code: `const el = document.querySelector('#pesan');

el.innerHTML = '<strong>Tebal</strong>';  // dirender sebagai tag
el.textContent = '<strong>Tebal</strong>'; // tampil apa adanya`,
    output: `Tebal          ← innerHTML (teks tebal)
<strong>Tebal</strong>   ← textContent (teks polos)`,
    explanation: 'Jika user mengetik <img onerror=...> — textContent menampilkannya sebagai teks, tidak dieksekusi.' },
  { question: 'Bagaimana menangani event dengan addEventListener()?', difficulty: 'Beginner', category: 'DOM & Events',
    answer: 'addEventListener("event", callback) menjalankan callback setiap kali event terjadi pada elemen: click, input, submit, keydown, mouseover, dll. Lebih fleksibel daripada atribut onclick karena bisa memasang BANYAK handler dan dilepas lagi dengan removeEventListener.',
    code: `const tombol = document.querySelector('#simpan');
const input = document.querySelector('#nama');

tombol.addEventListener('click', () => {
    console.log('Tombol diklik!');
});

input.addEventListener('input', (e) => {
    console.log('User mengetik:', e.target.value);
});`,
    explanation: 'e.target adalah elemen pemicu event — e.target.value berisi teks input saat itu.' },
  { question: 'Apa itu event bubbling dan event delegation?', difficulty: 'Intermediate', category: 'DOM & Events',
    answer: 'Event yang terjadi pada elemen anak akan "menggelembung" naik ke parent-parentnya — ini bubbling. Manfaatnya: pasang SATU listener di parent untuk menangani semua anak (event delegation) — penting untuk list dinamis yang isinya bisa bertambah.',
    code: `const list = document.querySelector('#todo');

list.addEventListener('click', (e) => {
    // hanya bereaksi jika yang diklik adalah <li>
    if (e.target.matches('li')) {
        console.log('Klik item:', e.target.textContent);
    }
});`,
    explanation: 'Satu listener untuk seluruh list — item baru pun otomatis tertangani.' },
  { question: 'Bagaimana menangani submit form di JavaScript?', difficulty: 'Intermediate', category: 'DOM & Events',
    answer: 'Pasang listener "submit" pada <form> (bukan tombolnya) lalu panggil e.preventDefault() untuk membatalkan reload halaman default. Ambil nilainya dari tiap input lewat .value, atau kumpulkan sekaligus dengan FormData.',
    code: `<form id="daftar">
    <input name="email" type="email">
    <button>Kirim</button>
</form>

<script>
const form = document.querySelector('#daftar');
form.addEventListener('submit', (e) => {
    e.preventDefault();               // cegah reload
    const data = new FormData(form);
    console.log(data.get('email'));   // ambil per nama input
});
</script>`,
    explanation: 'Tanpa preventDefault(), browser me-reload halaman dan console-mu terhapus.' },
  { question: 'Apa itu localStorage dan JSON?', difficulty: 'Beginner', category: 'Storage',
    answer: 'localStorage menyimpan data di browser yang BERTAHAN setelah tab ditutup/refresh — basis fitur "progress tersimpan". Hanya menerima string, jadi object harus dikonversi: JSON.stringify() saat menyimpan, JSON.parse() saat membaca.',
    code: `const user = { nama: 'Budi', level: 3 };

// simpan (object → string)
localStorage.setItem('user', JSON.stringify(user));

// baca (string → object)
const baca = JSON.parse(localStorage.getItem('user'));
console.log(baca.nama);

localStorage.removeItem('user');   // hapus`,
    output: `Budi`,
    explanation: 'Kapasitas ±5MB per origin; sesama localhost/URL berbagi penyimpanan yang sama.' },
  { question: 'Apa itu Fetch API dan bagaimana menggunakannya?', difficulty: 'Intermediate', category: 'Async & API',
    answer: 'fetch() mengirim HTTP request ke server/API dan mengembalikan Promise. Pola dasar: fetch(url) → .then(res => res.json()) untuk membaca body sebagai data → .then(data => ...). Selalu cek res.ok / res.status karena fetch TIDAK error otomatis saat 404.',
    code: `fetch('https://api.example.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('Gagal:', err));`,
    explanation: 'res.json() juga async (mengembalikan Promise) — makanya ada dua .then berantai.' },
  { question: 'Apa itu Promise?', difficulty: 'Intermediate', category: 'Async & API',
    answer: 'Promise mewakili nilai yang BELUM tersedia sekarang tetapi akan tersedia nanti (hasil operasi async seperti fetch). Keadaannya: pending → fulfilled (berhasil, ditangkap .then) atau rejected (gagal, ditangkap .catch). .finally() berjalan apa pun hasilnya.',
    code: `const janji = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Selesai!'), 1000);
});

janji
    .then((hasil) => console.log(hasil))
    .catch((err) => console.log(err))
    .finally(() => console.log('Selalu jalan'));`,
    output: `Selesai!
Selalu jalan`,
    explanation: 'Setelah 1 detik, resolve dipanggil dan .then menerima nilainya.' },
  { question: 'Apa itu async / await?', difficulty: 'Intermediate', category: 'Async & API',
    answer: 'async/await adalah cara menulis kode asynchronous dengan gaya sinkron — jauh lebih mudah dibaca daripada rantai .then(). Tandai function dengan async, lalu tulis await sebelum tiap Promise: kode "menunggu" di baris itu sampai hasilnya siap, tanpa membekukan halaman.',
    code: `async function ambilUser() {
    const res = await fetch('/api/user');
    const data = await res.json();
    return data;
}

async function mulai() {
    const user = await ambilUser();
    console.log(user.nama);
}
mulai();`,
    explanation: 'await hanya boleh di dalam function async — atau di top-level module.' },
  { question: 'Bagaimana error handling async dengan try/catch?', difficulty: 'Intermediate', category: 'Async & API',
    answer: 'Bungkus await di dalam try/catch: error jaringan maupun error yang kamu lempar sendiri (throw) tertangkap di catch — program tidak mati mendadak. Ini cara standar menangani kegagalan fetch dengan async/await.',
    code: `async function ambilData() {
    try {
        const res = await fetch('/api/data');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log('Terjadi error:', err.message);
        return null;   // nilai cadangan
    }
}`,
    explanation: 'fetch tidak error otomatis saat 404 — cek res.ok lalu throw Error sendiri.' }
],

/* ────────────────────────────────────────────────────────────
   WEB FUNDAMENTALS (28 kartu)
   ──────────────────────────────────────────────────────────── */
webfund: [
  { question: 'Apa itu website?', difficulty: 'Beginner', category: 'Dasar Web',
    answer: 'Website adalah kumpulan halaman (HTML + CSS + JS + aset lain) yang diakses lewat browser melalui internet, diidentifikasi oleh URL. Website tersimpan di server, lalu browser MENGUNDUH dan merendernya di perangkatmu.',
    code: `Halaman = HTML (struktur) + CSS (tampilan) + JS (perilaku)
Website = kumpulan halaman yang saling terhubung lewat link`,
    explanation: 'Saat kamu membuka website, browser-mu mengunduh file-file itu lalu menggambarnya.' },
  { question: 'Apa itu browser dan apa kerjanya?', difficulty: 'Beginner', category: 'Dasar Web',
    answer: 'Browser (Chrome, Firefox, Safari) adalah program yang MENERJEMAHKAN kode web menjadi halaman visual. Kerjanya: mengirim request ke server, menerima HTML/CSS/JS, lalu menjalankan rendering engine untuk menggambar halaman dan JS engine untuk menjalankan kode.',
    code: `1. Kamu mengetik URL
2. Browser mengirim HTTP request
3. Server membalas dengan HTML, CSS, JS
4. Browser menggambar halaman ← rendering`,
    explanation: 'Kode yang kamu tulis dibaca oleh browser — bukan oleh server.' },
  { question: 'Apa itu client dan server?', difficulty: 'Beginner', category: 'Client & Server',
    answer: 'Client = pihak yang MEMINTA (browser di perangkat user). Server = pihah yang MENYEDIKAN (komputer yang menyimpan website dan merespons permintaan). Pola ini berlaku di mana-mana: aplikasi mobile, aplikasi desktop, bahkan smart TV adalah client.',
    code: `Browser (client)                Server
──────────────────              ──────────
"Minta halaman utama"  ───────▶  menerima request
                                 mencari file/data
"Terima & tampilkan"   ◀───────  mengirim response`,
    explanation: 'Client meminta, server menyediakan — dua pihak dengan peran berbeda.' },
  { question: 'Apa itu client-server architecture?', difficulty: 'Beginner', category: 'Client & Server',
    answer: 'Arsitektur di mana aplikasi terbagi dua: frontend (di client/browser) untuk tampilan & interaksi, backend (di server) untuk logic, data, dan keamanan. Keduanya berkomunikasi lewat HTTP — client request, server response. Keuntungannya: data terpusat, bisa diakses jutaan user bersamaan.',
    code: `   [ Browser ]  ←── HTTP ──→  [ Backend ]  ←──→  [ Database ]
   frontend                          server           penyimpanan`,
    explanation: 'Frontend dan backend bisa dikerjakan tim berbeda, asal "kontrak" API-nya sama.' },
  { question: 'Apa bedanya frontend dan backend?', difficulty: 'Beginner', category: 'Client & Server',
    answer: 'Frontend = semua yang berjalan DI BROWSER: HTML, CSS, JavaScript — tombol, animasi, form. Backend = semua yang berjalan DI SERVER: memproses data, cek login, bicara dengan database — user tidak pernah melihat kodenya. Frontend = wajah, backend = otak.',
    code: `Frontend: tombol "Login" yang cantik
Backend : memverifikasi password di database
           ↓ (user tidak melihat ini)`,
    explanation: 'Kalau tombolnya jelek salah frontend; kalau login gagal terus — cek backend.' },
  { question: 'Apa itu HTTP?', difficulty: 'Beginner', category: 'HTTP',
    answer: 'HTTP (HyperText Transfer Protocol) adalah "bahasa" yang dipakai client dan server untuk saling bertukar data di web. Client mengirim REQUEST (method + URL + header), server membalas RESPONSE (status code + header + body). Semua pembukaan halaman, gambar, dan API call berjalan di atas HTTP.',
    code: `Request:
GET /halaman-utama HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: text/html

<html>...isi halaman...</html>`,
    explanation: 'Protocol = aturan komunikasi yang disepakati kedua pihak.' },
  { question: 'Bagaimana struktur HTTP request dan response?', difficulty: 'Beginner', category: 'HTTP',
    answer: 'Request terdiri dari: method (GET/POST/...), URL, header (info tambahan seperti tipe konten), dan opsional body (data yang dikirim). Response terdiri dari: status code, header, dan body (HTML/JSON yang diminta). Header adalah "amplop" — body adalah "isinya".',
    code: `POST /api/login HTTP/1.1        ← method + URL
Content-Type: application/json  ← header

{"username": "budi"}            ← body (data)

HTTP/1.1 200 OK                 ← status
Set-Cookie: session=abc123      ← header

{"pesan": "berhasil"}           ← body`,
    explanation: 'Header berisi metadata; body berisi konten/data yang sebenarnya.' },
  { question: 'Apa bedanya GET dan POST?', difficulty: 'Beginner', category: 'HTTP',
    answer: 'GET = MENGAMBIL data: parameter terlihat di URL, bisa di-bookmark & di-cache — cocok untuk membuka halaman/pencarian. POST = MENGIRIM data: data berada di body (tidak terlihat di URL) — wajib untuk login, pendaftaran, dan setiap operasi yang mengubah data.',
    code: `GET  /produk?warna=merah    ← data di URL
POST /login
     body: username=budi&password=xxx   ← data tersembunyi`,
    explanation: 'Aturan keamanan: password SELALU lewat POST, jangan pernah GET.' },
  { question: 'Kapan dipakai PUT dan DELETE?', difficulty: 'Intermediate', category: 'HTTP',
    answer: 'PUT = memperbarui/mengganti data yang sudah ada di server; DELETE = menghapus data. Bersama GET dan POST, keempatnya membentuk operasi CRUD (Create, Read, Update, Delete) pada REST API: POST = create, GET = read, PUT = update, DELETE = delete.',
    code: `POST   /api/buku      → tambah buku baru
GET    /api/buku/7    → baca buku no. 7
PUT    /api/buku/7    → perbarui buku no. 7
DELETE /api/buku/7    → hapus buku no. 7`,
    explanation: 'URL menunjuk ke data, method menunjuk ke AKSI yang diinginkan.' },
  { question: 'Apa itu HTTP status code?', difficulty: 'Beginner', category: 'Status Code',
    answer: 'Status code adalah angka 3 digit di awal response yang memberi tahu hasil request. Kelasnya: 2xx sukses, 3xx redirect (pindah alamat), 4xx salahnya di CLIENT, 5xx salahnya di SERVER. Membaca status code = keterampilan debugging web paling dasar.',
    code: `200 OK          ← sukses
301 Moved       ← alamat berubah permanen
404 Not Found   ← halaman tidak ada (salah client)
500             ← server error internal`,
    explanation: 'Cepat diagnosa: 4xx = periksa request-mu; 5xx = masalah di pihak server.' },
  { question: 'Apa arti status 400, 401, 403, dan 404?', difficulty: 'Beginner', category: 'Status Code',
    answer: '400 Bad Request: data yang kamu kirim salah format/tidak valid. 401 Unauthorized: belum login / kredensial salah. 403 Forbidden: sudah login tapi TIDAK punya izin. 404 Not Found: alamat yang diminta tidak ada. Semuanya salah di sisi client.',
    code: `POST /api/login → 400  (password kosong)
GET  /api/admin → 401  (belum login)
GET  /api/admin → 403  (login sbg user biasa)
GET  /halaman-x → 404  (tidak ada)`,
    explanation: 'Bedakan 401 dan 403: 401 = "kamu siapa?"; 403 = "aku tahu kamu, tapi dilarang".' },
  { question: 'Apa itu status 200, 301, dan 500?', difficulty: 'Beginner', category: 'Status Code',
    answer: '200 OK: request sukses dan body berisi hasilnya — response paling ideal. 301 Moved Permanently: alamat berubah permanen, browser otomatis pindah (dasar dari redirect www ↔ non-www). 500 Internal Server Error: kode di server crash — bukan salah request-mu.',
    code: `GET /api/produk
→ 200 OK + JSON produk

GET /lama
→ 301 → otomatis menuju /baru

GET /api/laporan
→ 500 (ada bug di server)`,
    explanation: 'Saat 500, tidak ada gunanya mencoba ulang berkali-kali — tunggu server dibenarkan.' },
  { question: 'Apa itu URL dan bagian-bagiannya?', difficulty: 'Beginner', category: 'URL & DNS',
    answer: 'URL adalah alamat lengkap sebuah resource di web. Bagiannya: protokol (https), domain (example.com), port (implisit), path (lokasi halaman), dan query string (?key=value — data tambahan). Setiap bagian punya peran — membedanya membuat kamu paham cara kerja web.',
    code: `https://toko.com/produk/7?warna=merah
  │         │       │        │
  │         │       │        └─ query (parameter)
  │         │       └─ path (lokasi halaman)
  │         └─ domain (nama server)
  └─ protokol`,
    explanation: 'Query string selalu diawali ? dan pasangan key=value dipisah &' },
  { question: 'Apa itu domain dan bagaimana membelinya?', difficulty: 'Beginner', category: 'URL & DNS',
    answer: 'Domain adalah nama unik yang mudah diingat untuk sebuah website (google.com). Tanpa domain, server hanya bisa diakses lewat IP angka yang sulit dihafal. Domain disewa per tahun dari registrar (Namecheap, GoDaddy, dsb) — kamu tidak memilikinya permanen.',
    code: `Domain     : toko.com        ← nama yang diingat orang
Subdomain : api.toko.com    ← bagian dari toko.com
IP server : 142.250.4.100   ← alamat asli server`,
    explanation: 'Subdomain gratis: api., blog., mail. — tinggal diatur di DNS.' },
  { question: 'Apa itu DNS dan bagaimana cara kerjanya?', difficulty: 'Intermediate', category: 'URL & DNS',
    answer: 'DNS (Domain Name System) adalah "buku telepon internet": menerjemahkan nama domain menjadi IP address server. Saat kamu membuka website, browser bertanya ke DNS server dulu "berapa IP toko.com?" — baru menghubungi IP tersebut. Proses ini butuh waktu, makanya ada DNS cache.',
    code: `1. Kamu mengetik toko.com
2. Browser: "DNS, berapa IP toko.com?"
3. DNS   : "IP-nya 142.250.4.100"
4. Browser menghubungi IP itu → halaman tampil`,
    explanation: 'Saat website "tidak bisa diakses padahal internet nyala" — kadang DNS-nya yang bermasalah.' },
  { question: 'Apa itu IP address?', difficulty: 'Beginner', category: 'URL & DNS',
    answer: 'IP address adalah alamat numerik unik setiap perangkat/server di jaringan — versi umum IPv4 (192.168.1.1) dan IPv6 yang lebih panjang. Seperti alamat rumah: data harus tahu ke mana dikirim. Domain hanyalah "nama panggilan" untuk IP tersebut.',
    code: `toko.com  →  142.250.4.100   (DNS menerjemahkan)
localhost →  127.0.0.1        (komputermu sendiri)`,
    explanation: '127.0.0.1 = localhost: cara developer menguji website di komputer sendiri.' },
  { question: 'Apa itu hosting?', difficulty: 'Beginner', category: 'URL & DNS',
    answer: 'Hosting adalah layanan menyimpan file website-mu di server yang selalu menyala dan terhubung internet 24/7, agar website bisa diakses kapan pun. Static hosting (GitHub Pages, Netlify) cukup untuk HTML/CSS/JS murni; hosting dengan server/backend (VPS, Railway) untuk aplikasi dinamis.',
    code: `Website kamu:
  di laptop   → hanya kamu bisa akses
  di hosting  → seluruh dunia bisa akses`,
    explanation: 'GitHub Pages = static hosting gratis — persis seperti project flashcards ini.' },
  { question: 'Apa bedanya HTTP dan HTTPS?', difficulty: 'Beginner', category: 'Keamanan',
    answer: 'HTTP mengirim data sebagai TEKS POLOS — orang yang menyadap jaringan bisa membaca password-mu. HTTPS = HTTP + enkripsi TLS: data terkunci dan hanya bisa dibaca client dan server yang dituju. Browser menandai situs HTTP sebagai "Not Secure".',
    code: `HTTP : password123  ← terkirim polos, bisa disadap
HTTPS: x9f#k2@...   ← terenkripsi, tak terbaca`,
    explanation: 'Karena itu password tidak boleh dikirim ke situs tanpa HTTPS.' },
  { question: 'Apa itu SSL/TLS dan padlock di browser?', difficulty: 'Intermediate', category: 'Keamanan',
    answer: 'TLS (penerus SSL) adalah protokol enkripsi yang mengamankan HTTPS. Server membuktikan identitasnya lewat sertifikat digital yang diterbitkan authority tepercaya (Let\'s Encrypt mengeluarkannya gratis). Ikon gembok di address bar = sertifikat valid = koneksi terenkripsi.',
    code: `1. Browser cek sertifikat server (masih berlaku?)
2. Kedua pihak menyepakati kunci enkripsi
3. Semua data berikutnya terenkripsi`,
    explanation: 'Sertifikat berisi identitas domain + masa berlaku + tanda tangan digital.' },
  { question: 'Apa itu cookie dan session?', difficulty: 'Intermediate', category: 'Keamanan',
    answer: 'Cookie = data kecil yang server titipkan di browser-mu dan otomatis dikirim ulang di setiap request ke domain itu. Session = keadaan login yang disimpan DI SERVER. Keduanya bekerja sama: cookie menyimpan session_id; server mencocokkan id itu dengan datanya — itulah kenapa kamu tetap login.',
    code: `Login sukses:
Server → Set-Cookie: session_id=abc123

Request berikutnya:
Browser → Cookie: session_id=abc123
Server : "abc123... ini Budi, sudah login"`,
    explanation: 'Tanpa cookie/session, kamu harus login ulang di SETIAP klik halaman.' },
  { question: 'Apa bedanya cookie dan localStorage?', difficulty: 'Intermediate', category: 'Keamanan',
    answer: 'Cookie: dikirim OTOMATIS ke server di setiap request — dipakai untuk login/session, kapasitas kecil (±4KB). localStorage: disimpan di browser dan TIDAK pernah dikirim ke server — dipakai untuk preferensi client (tema, progress belajar), kapasitas besar (±5MB).',
    code: `Cookie       → server bisa membacanya (untuk login)
localStorage → hanya JavaScript di browsermu
               (tema gelap, skor game, dsb.)`,
    explanation: 'Butuh server mengenali user? Cookie. Cuma simpan data client? localStorage.' },
  { question: 'Apa itu API?', difficulty: 'Beginner', category: 'API & Data',
    answer: 'API (Application Programming Interface) adalah "pintu resmi" yang disediakan aplikasi agar aplikasi lain bisa mengambil/mengirim data tanpa melihat kode internalnya. Di web, API biasanya berarti kumpulan URL (endpoint) yang mengembalikan data JSON — bukan halaman HTML.',
    code: `GET https://cuaca.com/api/jakarta

Response (JSON):
{ "kota": "Jakarta", "suhu": 31, "cuaca": "cerah" }`,
    explanation: 'Aplikasi cuaca di HP-mu mengambil data dari API seperti ini.' },
  { question: 'Apa itu REST API?', difficulty: 'Intermediate', category: 'API & Data',
    answer: 'REST adalah gaya merancang API yang paling umum: resource diwakili URL, aksi diwakili HTTP method (GET/POST/PUT/DELETE), dan data bertukar dalam JSON. Endpoint REST yang rapi terbaca seperti kalimat: method + URL = "lakukan apa, pada apa".',
    code: `GET    /api/buku       → daftar buku
POST   /api/buku       → tambah buku
GET    /api/buku/7     → detail buku 7
PUT    /api/buku/7     → ubah buku 7
DELETE /api/buku/7     → hapus buku 7`,
    explanation: 'URL menunjuk NOUN (resource), method adalah VERB (aksi) — konsisten dan mudah ditebak.' },
  { question: 'Apa itu JSON dan mengapa dipakai di mana-mana?', difficulty: 'Beginner', category: 'API & Data',
    answer: 'JSON (JavaScript Object Notation) adalah format teks untuk bertukar data — ringan, mudah dibaca manusia, dan didukung semua bahasa pemrograman. Bentuknya pasangan key: value seperti object JavaScript. Inilah "bahasa pengantar data" hampir semua API modern.',
    code: `{
  "nama": "Produk A",
  "harga": 15000,
  "tags": ["baru", "laris"],
  "stok": true
}`,
    explanation: 'JSON hanya mendukung teks, angka, boolean, null, array, dan object.' },
  { question: 'Apa itu database dan perannya di website?', difficulty: 'Beginner', category: 'API & Data',
    answer: 'Database adalah tempat menyimpan data secara permanen dan terstruktur di server — user, postingan, transaksi. Backend-lah yang berbicara dengan database (SQL atau NoSQL) lalu menyajikan hasilnya ke frontend lewat API. Tanpa database, data hilang setiap server restart.',
    code: `[ Browser ] → [ Backend ] → [ Database ]
     JSON          logic         SQL: SELECT * FROM users`,
    explanation: 'Frontend tidak pernah menyentuh database langsung — selalu lewat backend.' },
  { question: 'Bagaimana form HTML sampai ke server?', difficulty: 'Intermediate', category: 'Alur Kerja Web',
    answer: 'Saat kamu menekan submit: browser mengumpulkan semua input bernama → mengirim HTTP request (method dari form, biasanya POST) dengan data di body → server membaca datanya → memvalidasi → menyimpan ke database / memproses → membalas dengan halaman atau JSON hasilnya.',
    code: `1. User isi form & klik Kirim
2. Browser: POST /daftar + body: nama=Budi&email=b@x.com
3. Server: validasi data (nama kosong? email valid?)
4. Server: INSERT ke database
5. Response: "Pendaftaran berhasil!"`,
    explanation: 'Validasi di sisi client (HTML/JS) hanya untuk kenyamanan — validasi ULANG di server wajib.' },
  { question: 'Bagaimana proses login website bekerja secara sederhana?', difficulty: 'Intermediate', category: 'Alur Kerja Web',
    answer: 'User mengirim username+password lewat form (POST, via HTTPS). Server mencari user itu di database, lalu membandingkan password (yang tersimpan seharusnya berupa hash, bukan teks asli). Jika cocok, server membuat session dan mengirim session_id lewat cookie — sejak itu browser otomatis membuktikan identitas di tiap request.',
    code: `1. POST /login  { username, password }
2. Server cek database (hash cocok?)
3. Sukses → Set-Cookie: session_id=abc
4. GET /profil + Cookie: session_id=abc
   → server: "abc = Budi, sudah login"`,
    explanation: 'Password tidak pernah disimpan sebagai teks — disimpan sebagai hash satu arah.' },
  { question: 'Apa yang terjadi ketika user mengetik sebuah URL?', difficulty: 'Intermediate', category: 'Alur Kerja Web',
    answer: 'Ini rangkaian lengkapnya: (1) DNS menerjemahkan domain menjadi IP; (2) browser membuka koneksi (TCP) dan handshake TLS jika HTTPS; (3) browser mengirim HTTP GET; (4) server merespons dengan HTML; (5) browser mem-parse HTML dan menemukan CSS/JS/gambar — lalu mengunduhnya satu per satu; (6) halaman dirender. Semua ini terjadi dalam hitungan ratusan milidetik.',
    code: `ketik toko.com
   ↓ DNS: toko.com = 142.250.4.100
   ↓ koneksi + TLS
   ↓ GET / HTTP/1.1
   ↓ response: 200 OK + HTML
   ↓ temukan <link> & <script> → unduh CSS & JS
   ↓ render → halaman tampil`,
    explanation: 'Satu halaman bisa berarti puluhan request: HTML, CSS, JS, font, dan tiap gambar.' },
  { question: 'Apa bedanya static website dan dynamic website?', difficulty: 'Beginner', category: 'Alur Kerja Web',
    answer: 'Static: file HTML sudah jadi di server, dikirim apa adanya ke semua orang — cepat, murah, bisa di-hosting gratis (GitHub Pages!), tapi isinya hanya berubah jika file diedit. Dynamic: server MEMBUAT HTML saat diminta — isinya beda per user (timeline-mu vs timeline orang lain), datanya dari database, tapi butuh server yang berjalan.',
    code: `Static : blog pribadi, portofolio, dokumentasi
Dynamic: Tokopedia, Twitter, dashboard bank`,
    explanation: 'Hybrid juga umum: static untuk halaman publik, dynamic untuk bagian login.' },
  { question: 'Bagaimana frontend dan backend saling berkomunikasi?', difficulty: 'Intermediate', category: 'Alur Kerja Web',
    answer: 'Frontend memanggil API backend lewat fetch() (HTTP request). Backend memproses — membaca/menulis database, cek auth — lalu membalas JSON beserta status code. Frontend menerima JSON itu dan memperbarui tampilan tanpa reload. Kontrak keduanya: bentuk data JSON yang disepakati.',
    code: `// Frontend (di browser):
const res = await fetch('/api/produk');
const data = await res.json();
tampilkan(data);

// Backend merespons:
{ "produk": [...], "total": 42 }   ← JSON + 200 OK`,
    explanation: 'Perubahan API di backend tanpa pemberitahuan = frontend-mu ikut rusak — itu breaking change.' }
]
};

/* ============================================================
   3) ELEMEN DOM
   ============================================================ */
const $ = (id) => document.getElementById(id);

const sidebarEl    = $('sidebar');
const backdropEl   = $('backdrop');
const navList      = $('navList');
const menuBtn      = $('menuBtn');
const topbarTitle  = $('topbarTitle');
const dashboardView= $('dashboardView');
const studyView    = $('studyView');
const courseGrid   = $('courseGrid');
const dashTotal    = $('dashTotal');
const dashMastered = $('dashMastered');
const cardEl       = $('card');
const frontEl      = $('cardFront');
const backEl       = $('cardBack');
const searchInput  = $('searchInput');
const levelSel     = $('levelFilter');
const catSel       = $('catFilter');
const shuffleBtn   = $('shuffleBtn');
const resetBtn     = $('resetBtn');
const backBtn      = $('backBtn');
const btnPrev      = $('btnPrev');
const btnFlip      = $('btnFlip');
const btnNext      = $('btnNext');
const btnMastered  = $('btnMastered');
const masteredLbl  = $('masteredLabel');
const deckInfo     = $('deckInfo');
const counterEl    = $('cardCounter');
const fillEl       = $('progressFill');
const progLabel    = $('progressLabel');
const progPct      = $('progressPct');
const statMaster   = $('statMastered');
const statTotal    = $('statTotal');
const toastEl      = $('toast');

/* Ikon SVG kecil yang dipakai ulang saat render kartu */
const ICONS = {
  flip: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  copy: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
};

const LANG_LABEL = { python: 'python', js: 'javascript', css: 'css', html: 'html', text: 'contoh' };

/* ============================================================
   4) STATE & PENYIMPANAN (localStorage) — per course
   ============================================================ */
const LS_KEY = 'learning-hub-v1';
const OLD_LS_KEY = 'python-flashcards-v1'; // data versi lama → dimigrasikan

function defaultCourseState() {
  return { mastered: [], order: [], pos: 0 };
}

function defaultState() {
  return {
    view: 'dashboard',
    course: 'python',
    courses: {
      python: defaultCourseState(),
      html: defaultCourseState(),
      css: defaultCourseState(),
      javascript: defaultCourseState(),
      webfund: defaultCourseState()
    },
    level: 'all',  // all | Beginner | Intermediate | mastered | notmastered
    cat: 'all',
    q: ''
  };
}

let state = loadState();

let deckCache = [];      // kartu (hasil filter) course aktif
let currentCard = null;  // kartu yang sedang tampil
let swapTimer = null;
let toastTimer = null;
let searchTimer = null;

function saveState() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({
      course: state.course,
      courses: state.courses,
      level: state.level,
      cat: state.cat,
      q: state.q
    }));
  } catch (e) { /* storage tidak tersedia: abaikan */ }
}

function loadState() {
  const base = defaultState();
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return base;
    const d = JSON.parse(raw);
    // Gabungkan dengan default agar course baru tidak hilang datanya
    Object.keys(base.courses).forEach(k => {
      const saved = d.courses && d.courses[k];
      if (saved) {
        base.courses[k].mastered = Array.isArray(saved.mastered) ? saved.mastered : [];
        base.courses[k].order = Array.isArray(saved.order) ? saved.order : [];
        base.courses[k].pos = Number.isInteger(saved.pos) && saved.pos > 0 ? saved.pos : 0;
      }
    });
    if (COURSES[d.course]) base.course = d.course;
    base.level = d.level || 'all';
    base.cat = d.cat || 'all';
    base.q = typeof d.q === 'string' ? d.q : '';
    return base;
  } catch (e) {
    return base; // data rusak: mulai dari awal
  }
}

/* Migrasi data dari Python Flashcards versi lama (sekali jalan) */
function migrateOldPython() {
  try {
    const raw = localStorage.getItem(OLD_LS_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    const n = CARDS.python.length;
    // Kartu python dipertahankan urutannya → id lama (1..65) = index (id-1)
    if (Array.isArray(d.mastered)) {
      state.courses.python.mastered = d.mastered
        .filter(id => Number.isInteger(id) && id >= 1 && id <= n)
        .map(id => 'python:' + (id - 1));
    }
    if (Array.isArray(d.order) && d.order.length) {
      state.courses.python.order = d.order
        .filter(id => Number.isInteger(id) && id >= 1 && id <= n)
        .map(id => 'python:' + (id - 1));
    }
    if (Number.isInteger(d.pos) && d.pos > 0) {
      state.courses.python.pos = d.pos;
    }
    if (typeof d.q === 'string') state.q = d.q;
    localStorage.removeItem(OLD_LS_KEY); // konsumsi agar tidak migrasi dua kali
    saveState();
  } catch (e) { /* abaikan bila data lama rusak */ }
}

/* ============================================================
   5) UTIL
   ============================================================ */
const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const pad = (n) => String(n).padStart(2, '0');

/* State course yang sedang aktif */
const cs = () => state.courses[state.course];

/* id kartu = courseKey:index (index stabil selama kartu baru ditambah di AKHIR) */
const cardId = (key, i) => key + ':' + i;
const isMastered = (id) => cs().mastered.includes(id);

function totalCards() {
  return Object.keys(CARDS).reduce((sum, k) => sum + CARDS[k].length, 0);
}
function totalMastered() {
  return Object.keys(state.courses).reduce((sum, k) => sum + state.courses[k].mastered.length, 0);
}

/* ============================================================
   6) SYNTAX HIGHLIGHTING SEDERHANA (per bahasa, tanpa library)
   Semua regex bekerja pada teks yang SUDAH di-escape,
   jadi hasilnya aman dimasukkan ke innerHTML.
   ============================================================ */
const PY_RE = /(#[^\n]*)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(\b\d+(?:\.\d+)?\b)|\b(def|return|if|elif|else|for|while|in|import|from|as|and|or|not|is|True|False|None|try|except|finally|with|pass|break|continue|class|lambda|global|raise|del)\b|\b(print|len|range|type|input|int|str|float|bool|list|dict|set|tuple|sum|sorted|min|max|abs|round|enumerate|zip|open|map|filter|isinstance|super)\b|([A-Za-z_]\w*(?=\())/g;

const JS_RE = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|(\b\d+(?:\.\d+)?\b)|\b(const|let|var|function|return|if|else|for|while|do|switch|case|default|break|continue|class|extends|new|typeof|instanceof|of|in|try|catch|finally|throw|async|await|delete|true|false|null|undefined)\b|\b(console|document|window|JSON|Math|localStorage|sessionStorage|setTimeout|setInterval|fetch|Promise|Object|Array|String|Number|Boolean)\b|([A-Za-z_$][\w$]*(?=\())/g;

const CSS_RE = /(\/\*[\s\S]*?\*\/)|("[^"\n]*"|'[^'\n]*')|(#[0-9a-fA-F]{3,8}\b)|(@[\w-]+)|([a-zA-Z-]+(?=\s*:))|(\b\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|vmin|vmax|s|ms|deg|fr)?\b)/g;

const HTML_RE = /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?!?)([a-zA-Z][\w-]*)|([a-zA-Z-]+)(=)("[^"]*"|'[^']*')/g;

const TEXT_RE = /("[^"\n]*"|'[^'\n]*')|(https?:\/\/[^\s"']+)|\b(GET|POST|PUT|DELETE|PATCH|HEAD|INSERT|SELECT)\b|(\b\d{3}\b)|(^[ \t]*[a-zA-Z-]+(?=:))/gm;

/* Replacer seragam untuk python & js (urutan group sama) */
function stdReplacer(m, com, str, num, kw, bi, fn) {
  if (com) return '<span class="tok-com">' + com + '</span>';
  if (str) return '<span class="tok-str">' + str + '</span>';
  if (num) return '<span class="tok-num">' + num + '</span>';
  if (kw)  return '<span class="tok-kw">'  + kw  + '</span>';
  if (bi)  return '<span class="tok-bi">'  + bi  + '</span>';
  if (fn)  return '<span class="tok-fn">'  + fn  + '</span>';
  return m;
}

function hlPython(code) {
  return esc(code).replace(PY_RE, stdReplacer);
}
function hlJS(code) {
  return esc(code).replace(JS_RE, stdReplacer);
}
function hlCSS(code) {
  return esc(code).replace(CSS_RE, (m, com, str, hex, at, prop, num) => {
    if (com)  return '<span class="tok-com">' + com + '</span>';
    if (str)  return '<span class="tok-str">' + str + '</span>';
    if (hex)  return '<span class="tok-num">' + hex + '</span>';
    if (at)   return '<span class="tok-kw">'  + at  + '</span>';
    if (prop) return '<span class="tok-bi">'  + prop + '</span>';
    if (num)  return '<span class="tok-num">' + num + '</span>';
    return m;
  });
}
function hlHTML(code) {
  return esc(code).replace(HTML_RE, (m, com, open, tag, attr, eq, val) => {
    if (com)  return '<span class="tok-com">' + com + '</span>';
    if (tag)  return open + '<span class="tok-kw">' + tag + '</span>';
    if (attr) return '<span class="tok-bi">' + attr + '</span>' + eq + '<span class="tok-str">' + val + '</span>';
    return m;
  });
}
function hlText(code) {
  return esc(code).replace(TEXT_RE, (m, str, url, method, num3, key) => {
    if (str)    return '<span class="tok-str">' + str + '</span>';
    if (url)    return '<span class="tok-fn">'  + url + '</span>';
    if (method) return '<span class="tok-kw">'  + method + '</span>';
    if (num3)   return '<span class="tok-num">' + num3 + '</span>';
    if (key)    return '<span class="tok-bi">'  + key + '</span>';
    return m;
  });
}

const HIGHLIGHTERS = { python: hlPython, js: hlJS, css: hlCSS, html: hlHTML, text: hlText };

function highlight(code, lang) {
  return (HIGHLIGHTERS[lang] || hlText)(code);
}

/* ============================================================
   7) FILTER & PENYUSUNAN DECK
   ============================================================ */
function matchesQuery(c, q) {
  const expl = Array.isArray(c.explanation) ? c.explanation.join(' ') : (c.explanation || '');
  return (c.question + ' ' + c.answer + ' ' + c.code + ' ' + expl
    + ' ' + c.category + ' ' + c.difficulty).toLowerCase().includes(q);
}

function getDeck() {
  const key = state.course;
  const courseState = state.courses[key];
  let cards = CARDS[key].map((c, i) => ({ ...c, id: cardId(key, i) }));

  cards = cards.filter(c => {
    // Filter level / mastered
    let lvlOk = true;
    if (state.level === 'Beginner' || state.level === 'Intermediate') {
      lvlOk = c.difficulty === state.level;
    } else if (state.level === 'mastered') {
      lvlOk = courseState.mastered.includes(c.id);
    } else if (state.level === 'notmastered') {
      lvlOk = !courseState.mastered.includes(c.id);
    }
    const catOk = state.cat === 'all' || c.category === state.cat;
    const qOk = !state.q || matchesQuery(c, state.q);
    return lvlOk && catOk && qOk;
  });

  // Hormati urutan hasil shuffle tersimpan
  if (courseState.order.length) {
    const rank = new Map(courseState.order.map((id, i) => [id, i]));
    cards = cards.slice().sort((a, b) =>
      ((rank.get(a.id) ?? 1e9) - (rank.get(b.id) ?? 1e9)) || (a.id.localeCompare(b.id, 'id', { numeric: true }))
    );
  }
  return cards;
}

function refresh() {
  deckCache = getDeck();
  if (deckCache.length) {
    cs().pos = Math.min(cs().pos, deckCache.length - 1);
  } else {
    cs().pos = 0;
  }
  renderCardContent();
  updateMeta();
}

function pulseIn() {
  cardEl.classList.remove('in-r');
  void cardEl.offsetWidth; // paksa reflow agar animasi bisa berjalan lagi
  cardEl.classList.add('in-r');
}

/* ============================================================
   8) RENDER
   ============================================================ */

/* --- Sidebar nav --- */
function renderSidebar() {
  const items = [
    { view: 'dashboard', icon: '🏠', name: 'Dashboard', count: '' }
  ];
  Object.keys(COURSES).forEach(k => {
    items.push({
      course: k,
      icon: COURSES[k].icon,
      name: COURSES[k].name,
      count: state.courses[k].mastered.length + '/' + CARDS[k].length
    });
  });

  navList.innerHTML = items.map(it => {
    const active = it.view
      ? state.view === 'dashboard'
      : state.view === 'study' && state.course === it.course;
    return '<button class="nav-item' + (active ? ' active' : '') + '" type="button"'
      + (it.view ? ' data-view="dashboard"' : ' data-course="' + it.course + '"') + '>'
      + '<span class="nav-icon">' + it.icon + '</span>'
      + '<span>' + esc(it.name) + '</span>'
      + (it.count ? '<span class="nav-count">' + it.count + '</span>' : '')
      + '</button>';
  }).join('');

  statMaster.textContent = totalMastered();
  statTotal.textContent = totalCards();
}

/* --- Dashboard --- */
function renderDashboard() {
  dashTotal.textContent = totalCards();
  dashMastered.textContent = totalMastered();

  courseGrid.innerHTML = Object.keys(COURSES).map(k => {
    const meta = COURSES[k];
    const n = CARDS[k].length;
    const mastered = state.courses[k].mastered.length;
    const pct = n ? Math.round(mastered / n * 100) : 0;
    const started = mastered > 0;
    return '<article class="course-card" data-course="' + k + '" tabindex="0" role="button"'
      + ' aria-label="Buka course ' + esc(meta.name) + '">'
      + '<div class="cc-head"><span class="cc-icon">' + meta.icon + '</span>'
      + '<h3>' + esc(meta.name) + '</h3>'
      + '<span class="cc-count">' + n + ' kartu</span></div>'
      + '<p class="cc-desc">' + esc(meta.desc) + '</p>'
      + '<div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div>'
      + '<div class="cc-label"><span>' + mastered + ' / ' + n + ' dikuasai</span><span>' + pct + '%</span></div>'
      + '<button class="btn btn-primary" type="button">' + (started ? 'Lanjutkan' : 'Mulai Belajar') + '</button>'
      + '</article>';
  }).join('');
}

/* --- Pilihan kategori (dibangun ulang per course) --- */
function renderCatOptions() {
  const cats = [...new Set(CARDS[state.course].map(c => c.category))];
  catSel.innerHTML = '<option value="all">Semua Kategori</option>'
    + cats.map(c => {
        const n = CARDS[state.course].filter(x => x.category === c).length;
        return '<option value="' + esc(c) + '">' + esc(c) + ' (' + n + ')</option>';
      }).join('');
  catSel.value = cats.includes(state.cat) ? state.cat : 'all';
  state.cat = catSel.value;
}

/* --- Tag kategori/level/dikuasai --- */
function tagRow(c) {
  const int = c.difficulty === 'Intermediate';
  return '<div class="card-tags">'
    + '<span class="tag">' + esc(c.category) + '</span>'
    + '<span class="tag' + (int ? ' tag-int' : '') + '">' + c.difficulty + '</span>'
    + (isMastered(c.id) ? '<span class="tag tag-mastered">' + ICONS.check + ' Dikuasai</span>' : '')
    + '</div>';
}

/* --- Konten kartu --- */
function renderCardContent() {
  cardEl.classList.remove('flipped'); // kartu baru selalu mulai dari sisi depan
  const c = deckCache[cs().pos];
  currentCard = c || null;

  if (!c) {
    frontEl.innerHTML =
      '<div class="empty">'
      + '<svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<h2>Tidak ada kartu yang cocok</h2>'
      + '<p>Coba kata kunci atau filter lain — misalnya "flex", "flexbox", atau kategori Functions.</p>'
      + '<button class="btn btn-primary" id="clearFilterBtn" type="button">Bersihkan Filter</button>'
      + '</div>';
    backEl.innerHTML = '';
    cardEl.removeAttribute('aria-label');
    return;
  }

  const lang = COURSES[state.course].lang;

  // Sisi depan: pertanyaan
  frontEl.innerHTML =
    tagRow(c)
    + '<h2 class="card-question">' + esc(c.question) + '</h2>'
    + '<div class="card-hint">' + ICONS.flip
    + '<span>Klik kartu atau tekan <kbd>Space</kbd> untuk membalik</span></div>'
    + '<span class="card-watermark" aria-hidden="true">' + pad(cs().pos + 1) + '</span>';

  // Sisi belakang: jawaban + kode + penjelasan + output
  const expl = c.explanation
    ? '<div class="expl-block"><div class="expl-label">Penjelasan</div>'
      + (Array.isArray(c.explanation)
          ? '<ul class="expl-list">' + c.explanation.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>'
          : '<p class="expl-text">' + esc(c.explanation) + '</p>')
      + '</div>'
    : '';

  backEl.innerHTML =
    tagRow(c)
    + '<p class="card-answer">' + esc(c.answer) + '</p>'
    + '<div class="code-block">'
    +   '<div class="code-head">'
    +     '<span class="code-lang">' + (LANG_LABEL[lang] || 'code') + '</span>'
    +     '<button class="copy-btn" type="button" title="Salin kode">' + ICONS.copy + '<span>Salin</span></button>'
    +   '</div>'
    +   '<pre><code>' + highlight(c.code, lang) + '</code></pre>'
    + '</div>'
    + expl
    + (c.output
        ? '<div class="output-block"><div class="output-label">Output</div>'
          + '<pre><code>' + esc(c.output) + '</code></pre></div>'
        : '');

  cardEl.setAttribute('aria-label',
    'Kartu ' + (cs().pos + 1) + ' dari ' + deckCache.length + '. ' + c.question
    + '. Tekan Space untuk membalik.');
}

/* --- Counter, progress bar, tombol --- */
function updateMeta() {
  const deck = deckCache;
  const total = deck.length;

  deckInfo.textContent = total + ' kartu · ' + COURSES[state.course].name;
  counterEl.innerHTML = total
    ? 'CARD <b>' + pad(cs().pos + 1) + '</b> / ' + total
    : 'CARD <b>–</b> / 0';

  const masteredCount = deck.filter(c => isMastered(c.id)).length;
  const pct = total ? Math.round(masteredCount / total * 100) : 0;
  fillEl.style.width = pct + '%';
  progLabel.textContent = masteredCount + ' / ' + total + ' dikuasai';
  progPct.textContent = pct + '%';

  statMaster.textContent = totalMastered();
  statTotal.textContent = totalCards();

  btnPrev.disabled  = total === 0 || cs().pos <= 0;
  btnNext.disabled  = total === 0 || cs().pos >= total - 1;
  btnFlip.disabled  = total === 0;
  btnMastered.disabled = total === 0;

  const m = total > 0 && isMastered(deck[cs().pos].id);
  btnMastered.classList.toggle('is-active', m);
  masteredLbl.textContent = m ? 'Dikuasai' : 'Tandai Dikuasai';
}

/* --- Pergantian view --- */
function setView(view) {
  state.view = view;
  dashboardView.hidden = view !== 'dashboard';
  studyView.hidden = view !== 'study';
  topbarTitle.textContent = view === 'study' ? COURSES[state.course].name : 'Learning Hub';
  closeSidebar();
  if (view === 'dashboard') renderDashboard();
  else { renderCatOptions(); refresh(); }
  renderSidebar();
}

function openCourse(key) {
  state.course = key;
  state.cat = 'all'; // kategori tiap course berbeda → reset
  const n = CARDS[key].length;
  state.courses[key].pos = Math.min(state.courses[key].pos, Math.max(n - 1, 0));
  setView('study');
  saveState();
}

/* ============================================================
   9) AKSI
   ============================================================ */
function flipCard() {
  if (!deckCache.length || !currentCard) return;
  cardEl.classList.toggle('flipped');
}

function goTo(newPos, dir) {
  if (swapTimer) {
    clearTimeout(swapTimer);
    cardEl.classList.remove('out-l', 'out-r', 'in-l', 'in-r');
    swapTimer = null;
  }
  cs().pos = newPos;
  cardEl.classList.remove('flipped');
  cardEl.classList.add(dir === 'next' ? 'out-l' : 'out-r');

  swapTimer = setTimeout(() => {
    swapTimer = null;
    renderCardContent();
    updateMeta();
    saveState();
    cardEl.classList.remove('out-l', 'out-r');
    cardEl.classList.add(dir === 'next' ? 'in-r' : 'in-l');
    setTimeout(() => cardEl.classList.remove('in-r', 'in-l'), 300);
  }, 170);
}

const goNext = () => { if (cs().pos < deckCache.length - 1) goTo(cs().pos + 1, 'next'); };
const goPrev = () => { if (cs().pos > 0) goTo(cs().pos - 1, 'prev'); };

function toggleMastered() {
  const c = deckCache[cs().pos];
  if (!c) return;
  const i = cs().mastered.indexOf(c.id);
  if (i >= 0) {
    cs().mastered.splice(i, 1);
    showToast('Ditandai belum dikuasai');
  } else {
    cs().mastered.push(c.id);
    showToast('Kartu ditandai dikuasai');
  }
  saveState();
  renderCardContent();
  updateMeta();
  renderSidebar();
}

function shuffleDeck() {
  const key = state.course;
  const ids = CARDS[key].map((c, i) => cardId(key, i));
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  state.courses[key].order = ids;
  state.courses[key].pos = 0;
  saveState();
  refresh();
  pulseIn();
  showToast('Kartu ' + COURSES[key].name + ' berhasil diacak');
}

function resetProgress() {
  const name = COURSES[state.course].name;
  state.courses[state.course] = defaultCourseState();
  saveState();
  refresh();
  pulseIn();
  renderSidebar();
  showToast('Progress ' + name + ' direset');
}

function clearFilters() {
  state.cat = 'all';
  state.level = 'all';
  state.q = '';
  cs().pos = 0;
  searchInput.value = '';
  levelSel.value = 'all';
  catSel.value = 'all';
  saveState();
  refresh();
  showToast('Filter dibersihkan');
}

/* Sidebar drawer (mobile) */
function openSidebar()  { sidebarEl.classList.add('open'); backdropEl.classList.add('show'); }
function closeSidebar() { sidebarEl.classList.remove('open'); backdropEl.classList.remove('show'); }

/* ============================================================
   10) TOAST & COPY
   ============================================================ */
function showToast(msg) {
  toastEl.innerHTML = ICONS.check + '<span>' + esc(msg) + '</span>';
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

function copyText(text) {
  const done = () => showToast('Kode disalin ke clipboard');
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      done();
    } catch (e) {
      showToast('Gagal menyalin kode');
    }
    ta.remove();
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else {
    fallback();
  }
}

/* ============================================================
   11) EVENT LISTENER
   ============================================================ */

/* Navigasi sidebar */
navList.addEventListener('click', (e) => {
  const item = e.target.closest('.nav-item');
  if (!item) return;
  if (item.dataset.view) setView('dashboard');
  else if (item.dataset.course) openCourse(item.dataset.course);
});

/* Kartu course di dashboard */
courseGrid.addEventListener('click', (e) => {
  const card = e.target.closest('[data-course]');
  if (card) openCourse(card.dataset.course);
});
courseGrid.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('[data-course]');
  if (card) { e.preventDefault(); openCourse(card.dataset.course); }
});

/* Drawer mobile */
menuBtn.addEventListener('click', () => {
  sidebarEl.classList.contains('open') ? closeSidebar() : openSidebar();
});
backdropEl.addEventListener('click', closeSidebar);

/* Klik pada kartu flashcard: salin kode / bersihkan filter / flip */
cardEl.addEventListener('click', (e) => {
  if (e.target.closest('.copy-btn')) {
    if (currentCard) copyText(currentCard.code);
    return;
  }
  if (e.target.closest('#clearFilterBtn')) {
    clearFilters();
    return;
  }
  const sel = window.getSelection && window.getSelection();
  if (sel && String(sel).length) return;
  flipCard();
});

/* Shortcut keyboard */
document.addEventListener('keydown', (e) => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'select' || tag === 'textarea') return;

  if (e.key === 'Escape') {
    if (sidebarEl.classList.contains('open')) closeSidebar();
    else if (state.view === 'study') setView('dashboard');
  } else if (state.view === 'study') {
    if (e.code === 'Space')          { e.preventDefault(); flipCard(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
    else if (e.key === 'Enter' && e.target === cardEl) { flipCard(); }
    else if (e.key === 'm' || e.key === 'M') { toggleMastered(); }
  }
});

btnFlip.addEventListener('click', flipCard);
btnNext.addEventListener('click', goNext);
btnPrev.addEventListener('click', goPrev);
btnMastered.addEventListener('click', toggleMastered);
shuffleBtn.addEventListener('click', shuffleDeck);
resetBtn.addEventListener('click', resetProgress);
backBtn.addEventListener('click', () => setView('dashboard'));

levelSel.addEventListener('change', () => {
  state.level = levelSel.value;
  cs().pos = 0;
  saveState();
  refresh();
});

catSel.addEventListener('change', () => {
  state.cat = catSel.value;
  cs().pos = 0;
  saveState();
  refresh();
});

/* Pencarian dengan debounce 180ms — mencari pertanyaan, jawaban,
   kode, penjelasan, kategori, dan level pada course aktif */
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.q = searchInput.value.trim().toLowerCase();
    cs().pos = 0;
    saveState();
    refresh();
  }, 180);
});

/* ============================================================
   12) INIT
   ============================================================ */
(function init() {
  migrateOldPython();        // import data Python Flashcards versi lama

  searchInput.value = state.q;
  levelSel.value = state.level;

  renderSidebar();
  setView('dashboard');      // selalu mulai dari dashboard
})();

/* ===== AKHIR FILE — baris ini wajib ada agar paste kamu lengkap ===== */

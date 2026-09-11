/* ============================================================
   PYTHON FLASHCARDS — logika aplikasi
   Struktur: DATA → STATE/STORAGE → UTIL → HIGHLIGHT →
             FILTER → RENDER → AKSI → EVENT → INIT
   ============================================================ */

/* ============================================================
   1) DATA FLASHCARD
   Tambah kartu baru cukup dengan menambah objek ke array ini.
   id harus unik; cat = kategori; level = 'Beginner'|'Intermediate'
   ============================================================ */
const FLASHCARDS = [
  // ── Python Basics ──────────────────────────────────────────
  {
    id: 1, cat: 'Python Basics', level: 'Beginner',
    q: 'Apa itu Python dan kenapa banyak digunakan pemula?',
    a: 'Python adalah bahasa pemrograman high-level yang diterjemahkan interpreter. Sintaksnya mirip bahasa manusia sehingga mudah dibaca, dan dipakai di banyak bidang: web, data science, otomasi, hingga AI.',
    code: `print("Hello, World!")`,
    output: `Hello, World!`
  },
  {
    id: 2, cat: 'Python Basics', level: 'Beginner',
    q: 'Bagaimana cara menampilkan output dan menulis komentar?',
    a: 'print() menampilkan output ke layar. Komentar diawali tanda # dan sepenuhnya diabaikan interpreter — dipakai untuk memberi penjelasan pada kode.',
    code: `# ini komentar, tidak dijalankan
print("Belajar Python")   # ini juga komentar`,
    output: `Belajar Python`
  },
  {
    id: 3, cat: 'Python Basics', level: 'Beginner',
    q: 'Mengapa indentasi sangat penting di Python?',
    a: 'Python menggunakan indentasi (spasi di awal baris) untuk menentukan blok kode — bukan kurung kurawal {} seperti bahasa lain. Standarnya 4 spasi. Indentasi yang salah membuat program error.',
    code: `nilai = 80
if nilai >= 75:
    print("Lulus")     # masuk blok if
print("Selesai")       # TIDAK masuk blok if`,
    output: `Lulus
Selesai`
  },

  // ── Variables ──────────────────────────────────────────────
  {
    id: 4, cat: 'Variables', level: 'Beginner',
    q: 'Apa itu variabel dan bagaimana membuatnya?',
    a: 'Variabel adalah nama untuk menyimpan nilai. Di Python kamu tidak perlu mendeklarasikan tipe — cukup tulis nama = nilai. Tanda = berarti "simpan nilai ke variabel", bukan persamaan matematika.',
    code: `nama = "Andi"
umur = 17
print(nama, "berumur", umur)`,
    output: `Andi berumur 17`
  },
  {
    id: 5, cat: 'Variables', level: 'Beginner',
    q: 'Apa saja aturan penamaan variabel?',
    a: 'Gunakan snake_case (huruf kecil + underscore). Nama tidak boleh diawali angka, tidak boleh sama dengan keyword Python, dan bersifat case-sensitive (nama dan Nama adalah dua variabel berbeda).',
    code: `total_harga = 5000    # benar: snake_case
user_2 = "Budi"       # benar: angka boleh di tengah
2harga = 100          # SALAH: diawali angka
class = "IPA"         # SALAH: class adalah keyword`,
    output: ``
  },
  {
    id: 6, cat: 'Variables', level: 'Beginner',
    q: 'Apakah variabel di Python bisa berganti tipe?',
    a: 'Bisa. Python bersifat dynamic typing — variabel tidak "terkunci" pada satu tipe dan boleh menyimpan tipe yang berbeda kapan saja. Cek tipe sebuah nilai dengan type().',
    code: `x = 10
print(type(x))
x = "sepuluh"
print(type(x))`,
    output: `<class 'int'>
<class 'str'>`
  },

  // ── Data Types ─────────────────────────────────────────────
  {
    id: 7, cat: 'Data Types', level: 'Beginner',
    q: 'Apa saja tipe data paling umum di Python?',
    a: 'int (bilangan bulat), float (desimal), str (teks), bool (True/False), lalu koleksi: list, tuple, set, dan dict. Gunakan type() untuk melihat tipe sebuah nilai.',
    code: `print(type(42), type(3.14), type("hai"), type(True))`,
    output: `<class 'int'> <class 'float'> <class 'str'> <class 'bool'>`
  },
  {
    id: 8, cat: 'Data Types', level: 'Intermediate',
    q: 'Apa bedanya mutable dan immutable?',
    a: 'Mutable = bisa diubah setelah dibuat (list, dict, set). Immutable = tidak bisa diubah (str, int, float, tuple). Mengubah nilai immutable berarti membuat nilai baru, bukan mengubah yang lama.',
    code: `angka = [1, 2, 3]
angka[0] = 99        # OK, list itu mutable
print(angka)

teks = "Python"
teks[0] = "J"        # Error! string itu immutable`,
    output: `[99, 2, 3]
TypeError: 'str' object doesn't support item assignment`
  },

  // ── String ─────────────────────────────────────────────────
  {
    id: 9, cat: 'String', level: 'Beginner',
    q: 'Bagaimana mengambil karakter atau potongan teks (indexing & slicing)?',
    a: 'Index dimulai dari 0, dan index negatif dihitung dari belakang. Slicing memakai format [mulai:selesai] — posisi selesai tidak ikut diambil.',
    code: `kata = "Python"
print(kata[0])     # karakter pertama
print(kata[-1])    # karakter terakhir
print(kata[0:3])   # 3 karakter pertama`,
    output: `P
n
Pyt`
  },
  {
    id: 10, cat: 'String', level: 'Beginner',
    q: 'Apa itu f-string dan kenapa lebih praktis?',
    a: 'f-string menggabungkan teks dan variabel secara langsung: tulis f sebelum tanda kutip, lalu letakkan variabel (bahkan ekspresi) di dalam kurung kurawal. Jauh lebih ringkas daripada penggabungan dengan +.',
    code: `nama, umur = "Rina", 20
print(f"{nama} berumur {umur} tahun")
print(f"Tahun depan: {umur + 1}")`,
    output: `Rina berumur 20 tahun
Tahun depan: 21`
  },
  {
    id: 11, cat: 'String', level: 'Beginner',
    q: 'Method string apa yang paling sering dipakai?',
    a: 'strip() membuang spasi di depan-belakang, upper()/lower() mengganti kapitalisasi, replace() mengganti teks, dan split() memecah menjadi list. Semua method mengembalikan string baru karena string immutable.',
    code: `s = "  Belajar Python  "
print(s.strip())
print(s.upper().strip())     # method bisa dirantai
print("a,b,c".split(","))`,
    output: `Belajar Python
BELAJAR PYTHON
['a', 'b', 'c']`
  },

  // ── Numbers ────────────────────────────────────────────────
  {
    id: 12, cat: 'Numbers', level: 'Beginner',
    q: 'Apa bedanya int dan float?',
    a: 'int adalah bilangan bulat tanpa desimal; float adalah bilangan desimal (ada titiknya). Perhatikan: pembagian biasa dengan / selalu menghasilkan float, walau kedua angkanya int.',
    code: `print(10 / 2)        # / selalu menghasilkan float
print(type(10 / 2))
print(type(5))        # int: tanpa desimal`,
    output: `5.0
<class 'float'>
<class 'int'>`
  },
  {
    id: 13, cat: 'Numbers', level: 'Beginner',
    q: 'Apa kegunaan operator //, %, dan **?',
    a: '// adalah pembagian yang dibulatkan ke bawah (floor division), % adalah sisa bagi (modulo), dan ** adalah pangkat. Modulo sangat sering dipakai untuk cek bilangan genap/ganjil.',
    code: `print(10 // 3)      # 3 (dibulatkan ke bawah)
print(10 % 3)       # 1 (sisa bagi)
print(2 ** 8)       # 2 pangkat 8
print(7 % 2 == 0)   # genap? tidak`,
    output: `3
1
256
False`
  },

  // ── Boolean ────────────────────────────────────────────────
  {
    id: 14, cat: 'Boolean', level: 'Beginner',
    q: 'Apa itu nilai truthy dan falsy?',
    a: 'Selain True/False, nilai lain juga punya "nilai kebenaran" saat dikonversi ke bool. Falsy: 0, 0.0, "", [], {}, None. Selebihnya truthy. Berguna untuk mengecek "ada isinya atau kosong".',
    code: `print(bool(0), bool(""))
print(bool("Python"), bool([1, 2]))

if []:
    print("penuh")
else:
    print("kosong")`,
    output: `False False
True True
kosong`
  },
  {
    id: 15, cat: 'Boolean', level: 'Beginner',
    q: 'Apa bedanya and dan or?',
    a: 'and menghasilkan True jika SEMUA kondisi benar. or menghasilkan True jika MINIMAL satu benar. Python juga mengevaluasi secara short-circuit: berhenti begitu hasilnya sudah pasti.',
    code: `umur, member = 17, True
print(umur >= 17 and member)   # keduanya benar
print(umur < 17 or member)     # salah satu benar
print(not member)              # membalik nilai`,
    output: `True
True
False`
  },

  // ── Operators ──────────────────────────────────────────────
  {
    id: 16, cat: 'Operators', level: 'Beginner',
    q: 'Apa bedanya = dan ==?',
    a: '= adalah assignment: menyimpan nilai ke variabel. == adalah comparison: membandingkan dua nilai dan menghasilkan True/False. Kebiasaan menukar keduanya adalah bug paling umum di kalangan pemula.',
    code: `x = 5            # simpan 5 ke dalam x
print(x == 5)    # bandingkan x dengan 5
print(x == 6)
print(x)`,
    output: `True
False
5`
  },
  {
    id: 17, cat: 'Operators', level: 'Beginner',
    q: 'Apa itu augmented assignment (+=, -=, *=)?',
    a: 'Gabungan operasi dan assignment dalam satu operator: x += 1 artinya sama dengan x = x + 1. Sangat praktis untuk counter dan akumulator.',
    code: `skor = 0
skor += 10     # skor = skor + 10
skor += 20
skor *= 2      # kali 2
print(skor)`,
    output: `60`
  },

  // ── If / Elif / Else ───────────────────────────────────────
  {
    id: 18, cat: 'If / Elif / Else', level: 'Beginner',
    q: 'Bagaimana cara kerja if / elif / else?',
    a: 'Python mengecek kondisi dari atas ke bawah dan menjalankan blok pertama yang bernilai True — sisanya dilewati. else berjalan jika semua kondisi di atasnya salah.',
    code: `nilai = 78
if nilai >= 90:
    print("A")
elif nilai >= 75:
    print("B")
else:
    print("C")`,
    output: `B`
  },
  {
    id: 19, cat: 'If / Elif / Else', level: 'Beginner',
    q: 'Bisakah if-else ditulis dalam satu baris (ternary)?',
    a: 'Bisa. Formatnya: nilai_if_true if kondisi else nilai_if_false. Cocok untuk pilihan sederhana — untuk logika kompleks tetap gunakan if biasa agar mudah dibaca.',
    code: `nilai = 60
status = "Lulus" if nilai >= 70 else "Remedial"
print(status)`,
    output: `Remedial`
  },

  // ── For Loop ───────────────────────────────────────────────
  {
    id: 20, cat: 'For Loop', level: 'Beginner',
    q: 'Bagaimana cara kerja for loop?',
    a: 'for mengulang setiap elemen dari sebuah koleksi (list, string, range). range(n) menghasilkan angka 0 sampai n-1. Ini jenis loop yang paling sering dipakai di Python.',
    code: `for i in range(3):
    print("Perulangan ke", i)

for buah in ["apel", "jeruk"]:
    print(buah)`,
    output: `Perulangan ke 0
Perulangan ke 1
Perulangan ke 2
apel
jeruk`
  },
  {
    id: 21, cat: 'For Loop', level: 'Intermediate',
    q: 'Kapan pakai for dan kapan while?',
    a: 'for: jumlah perulangan sudah diketahui atau saat me-loop sebuah koleksi. while: perulangan berjalan selama kondisi benar dan jumlahnya tidak pasti (misal menunggu input valid). while tanpa pengubah kondisi = infinite loop.',
    code: `# for: jumlah sudah diketahui
for i in range(3):
    print(i)

# while: selama kondisi masih benar
stok = 3
while stok > 0:
    print("jual, sisa", stok)
    stok -= 1`,
    output: `0
1
2
jual, sisa 3
jual, sisa 2
jual, sisa 1`
  },

  // ── While Loop ─────────────────────────────────────────────
  {
    id: 22, cat: 'While Loop', level: 'Beginner',
    q: 'Bagaimana cara kerja while loop?',
    a: 'while mengulang blok kode selama kondisinya True. Pastikan ada sesuatu di dalam loop yang membuat kondisi akhirnya menjadi False — kalau tidak, loop berjalan selamanya.',
    code: `hitung = 1
while hitung <= 3:
    print("Halo ke-", hitung)
    hitung += 1     # tanpa baris ini: infinite loop!`,
    output: `Halo ke- 1
Halo ke- 2
Halo ke- 3`
  },
  {
    id: 23, cat: 'While Loop', level: 'Beginner',
    q: 'Apa fungsi break dan continue?',
    a: 'break menghentikan loop sepenuhnya luar keluar darinya. continue melewati sisa iterasi yang sedang berjalan dan langsung lanjut ke iterasi berikutnya.',
    code: `for n in range(1, 6):
    if n == 2:
        continue    # lewati angka 2
    if n == 5:
        break       # berhenti total di angka 5
    print(n)`,
    output: `1
3
4`
  },

  // ── Functions ──────────────────────────────────────────────
  {
    id: 24, cat: 'Functions', level: 'Beginner',
    q: 'Apa itu function di Python?',
    a: 'Function adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Definisikan sekali dengan def, lalu panggil namanya kapan pun dibutuhkan — tidak perlu menulis kode yang sama berulang-ulang.',
    code: `def add(a, b):
    return a + b

result = add(10, 20)
print(result)`,
    output: `30`
  },
  {
    id: 25, cat: 'Functions', level: 'Beginner',
    q: 'Apa yang dikembalikan function tanpa return?',
    a: 'Semua function mengembalikan nilai. Jika tidak ada return, yang dikembalikan adalah None — objek khusus Python yang berarti "tidak ada nilai".',
    code: `def sapa():
    print("Hai!")    # print BUKAN return

hasil = sapa()
print(hasil)`,
    output: `Hai!
None`
  },

  // ── Parameters & Arguments ─────────────────────────────────
  {
    id: 26, cat: 'Parameters & Arguments', level: 'Beginner',
    q: 'Apa bedanya parameter dan argument?',
    a: 'Parameter adalah variabel nama di definisi function (tempat penampung). Argument adalah nilai asli yang dikirim saat memanggil function. Mudah diingat: parameter saat def, argument saat memanggil.',
    code: `def sapa(nama):        # nama = parameter
    print("Hai,", nama)

sapa("Budi")           # "Budi" = argument`,
    output: `Hai, Budi`
  },
  {
    id: 27, cat: 'Parameters & Arguments', level: 'Beginner',
    q: 'Bagaimana memberi nilai default pada parameter?',
    a: 'Tulis nilai defaultnya saat mendefinisikan: def sapa(nama="Teman"). Jika argument dikirim, nilai default diganti; jika tidak dikirim, default yang dipakai.',
    code: `def sapa(nama="Teman"):
    print(f"Halo, {nama}!")

sapa()             # pakai default
sapa("Sinta")      # kirim nilai sendiri`,
    output: `Halo, Teman!
Halo, Sinta!`
  },
  {
    id: 28, cat: 'Parameters & Arguments', level: 'Intermediate',
    q: 'Apa itu *args?',
    a: '*args membuat function bisa menerima jumlah argument berapa pun — semua dikumpulkan menjadi tuple. Nama "args" hanya konvensi; tanda bintang *-nya yang sebenarnya berperan.',
    code: `def jumlah(*angka):
    return sum(angka)

print(jumlah(1, 2))
print(jumlah(1, 2, 3, 4))`,
    output: `3
10`
  },

  // ── Return ─────────────────────────────────────────────────
  {
    id: 29, cat: 'Return', level: 'Beginner',
    q: 'Apa bedanya return dan print?',
    a: 'print hanya menampilkan nilai ke layar — nilainya tidak bisa dipakai lagi. return mengirim nilai keluar dari function sehingga bisa disimpan di variabel atau dihitung lanjut. Print = tampil, return = nilai.',
    code: `def kuadrat(x):
    return x ** 2

hasil = kuadrat(5)     # nilai tersimpan
print(hasil + 1)       # bisa dihitung lanjut`,
    output: `26`
  },
  {
    id: 30, cat: 'Return', level: 'Beginner',
    q: 'Bisakah satu function mengembalikan banyak nilai?',
    a: 'Bisa — pisahkan dengan koma. Python mengemasnya menjadi tuple, dan kamu bisa langsung meng-unpack-nya ke beberapa variabel sekaligus.',
    code: `def min_max(angka):
    return min(angka), max(angka)

kecil, besar = min_max([4, 1, 9, 3])
print(kecil, besar)`,
    output: `1 9`
  },

  // ── List ───────────────────────────────────────────────────
  {
    id: 31, cat: 'List', level: 'Beginner',
    q: 'Apa itu list dan cara dasar menggunakannya?',
    a: 'List adalah kumpulan nilai yang terurut dan bisa diubah, ditulis dengan kurung siku []. Elemen diakses lewat index yang dimulai dari 0, dan jumlah elemennya dicek dengan len().',
    code: `buah = ["apel", "mangga", "pisang"]
print(buah[0])       # elemen pertama
print(len(buah))     # jumlah elemen
buah[1] = "jeruk"    # ganti elemen
print(buah)`,
    output: `apel
3
['apel', 'jeruk', 'pisang']`
  },
  {
    id: 32, cat: 'List', level: 'Beginner',
    q: 'Apa bedanya append() dan extend()?',
    a: 'append() menambah SATU elemen ke akhir list — jika kamu memberi list, list itu menjadi elemen bersarang. extend() menggabungkan setiap elemen satu per satu ke akhir list.',
    code: `a = [1, 2]
a.append([3, 4])
print(a)

b = [1, 2]
b.extend([3, 4])
print(b)`,
    output: `[1, 2, [3, 4]]
[1, 2, 3, 4]`
  },
  {
    id: 33, cat: 'List', level: 'Beginner',
    q: 'Bagaimana cara menghapus elemen dari list?',
    a: 'remove(nilai) menghapus elemen berdasarkan nilainya (yang pertama ditemukan). pop(index) menghapus berdasarkan index sekaligus mengembalikan elemennya — pop() tanpa index mengambil elemen terakhir.',
    code: `nilai = [10, 20, 30, 40]
nilai.remove(20)         # hapus nilai 20
terakhir = nilai.pop()   # ambil & hapus terakhir
print(nilai)
print("diambil:", terakhir)`,
    output: `[10, 30]
diambil: 40`
  },

  // ── Tuple ──────────────────────────────────────────────────
  {
    id: 34, cat: 'Tuple', level: 'Beginner',
    q: 'Apa itu tuple?',
    a: 'Tuple adalah kumpulan nilai terurut tetapi TIDAK bisa diubah (immutable), ditulis dengan kurung biasa (). Cocok untuk data tetap seperti koordinat atau tanggal.',
    code: `titik = (10, 20)
print(titik[0])
print(len(titik))
x, y = titik          # unpacking
print(x + y)`,
    output: `10
2
30`
  },
  {
    id: 35, cat: 'Tuple', level: 'Beginner',
    q: 'Apa bedanya list dan tuple?',
    a: 'List ([]) bersifat mutable: bisa ditambah, diubah, dihapus — untuk data yang berubah. Tuple (()) immutable: setelah dibuat tidak bisa diubah — untuk data tetap, lebih hemat memori, dan bisa dipakai sebagai key dictionary.',
    code: `daftar = [1, 2, 3]
daftar[0] = 99      # OK, list bisa diubah

tetap = (1, 2, 3)
tetap[0] = 99       # Error! tuple tidak bisa diubah`,
    output: `TypeError: 'tuple' object does not support item assignment`
  },

  // ── Set ────────────────────────────────────────────────────
  {
    id: 36, cat: 'Set', level: 'Beginner',
    q: 'Apa itu set dan kenapa bisa menghilangkan duplikat?',
    a: 'Set adalah kumpulan nilai unik dan tidak terurut, ditulis dengan kurung kurawal {}. Duplikat otomatis dibuang — ini trik cepat untuk membersihkan data yang duplikat.',
    code: `nomor = [1, 2, 2, 3, 3, 3]
unik = set(nomor)
print(unik)
print(len(unik))`,
    output: `{1, 2, 3}
3`
  },
  {
    id: 37, cat: 'Set', level: 'Intermediate',
    q: 'Bagaimana operasi gabungan dan irisan pada set?',
    a: 'Union dengan tanda | menggabungkan semua anggota unik dari dua set. Intersection dengan tanda & hanya mengambil anggota yang ada di kedua set.',
    code: `a = {1, 2, 3}
b = {3, 4, 5}
print(a | b)    # union
print(a & b)    # intersection`,
    output: `{1, 2, 3, 4, 5}
{3}`
  },

  // ── Dictionary ─────────────────────────────────────────────
  {
    id: 38, cat: 'Dictionary', level: 'Beginner',
    q: 'Apa itu dictionary?',
    a: 'Dictionary menyimpan pasangan key → value dengan kurung kurawal {}. Nilai diakses lewat key (bukan index angka). Sangat cocok untuk data yang punya label, seperti data sebuah siswa.',
    code: `siswa = {"nama": "Dewi", "umur": 19}
print(siswa["nama"])
siswa["umur"] = 20          # ubah nilai
siswa["kota"] = "Bandung"   # tambah key baru
print(siswa)`,
    output: `Dewi
{'nama': 'Dewi', 'umur': 20, 'kota': 'Bandung'}`
  },
  {
    id: 39, cat: 'Dictionary', level: 'Beginner',
    q: 'Bagaimana mengakses key yang mungkin tidak ada?',
    a: 'Mengakses dengan [] akan error KeyError jika key tidak ditemukan. Gunakan .get(key) — mengembalikan None (atau nilai default yang kamu tentukan) sehingga program tetap aman.',
    code: `harga = {"kopi": 15000}
print(harga.get("kopi"))
print(harga.get("teh"))        # None, tidak error
print(harga.get("teh", 0))     # dengan default 0`,
    output: `15000
None
0`
  },
  {
    id: 40, cat: 'Dictionary', level: 'Beginner',
    q: 'Bagaimana cara me-loop sebuah dictionary?',
    a: 'Gunakan .items() untuk mendapatkan key dan value sekaligus, .keys() untuk semua key, dan .values() untuk semua nilai.',
    code: `nilai = {"mat": 90, "fis": 85}
for pelajaran, skor in nilai.items():
    print(pelajaran, "->", skor)`,
    output: `mat -> 90
fis -> 85`
  },

  // ── Input & Output ─────────────────────────────────────────
  {
    id: 41, cat: 'Input & Output', level: 'Beginner',
    q: 'Mengapa input() selalu menghasilkan string?',
    a: 'Apa pun yang diketik user diperlakukan sebagai teks. Untuk operasi matematika, konversi dulu dengan int() atau float() — kalau tidak, "18" + 1 justru error karena string tidak bisa ditambah angka.',
    code: `umur = input("Umur kamu: ")   # hasilnya string
umur = int(umur)              # konversi ke angka
print("Tahun depan:", umur + 1)`,
    output: `Umur kamu: 18
Tahun depan: 19`
  },
  {
    id: 42, cat: 'Input & Output', level: 'Beginner',
    q: 'Apa fungsi sep dan end pada print()?',
    a: 'sep mengatur pemisah antar nilai yang dicetak (defaultnya spasi). end mengatur karakter setelah baris selesai (defaultnya newline) — bergunakan untuk mencetak di baris yang sama.',
    code: `print("2025", "06", "15", sep="-")
print("Memuat", end="...")
print("selesai!")`,
    output: `2025-06-15
Memuat...selesai!`
  },

  // ── Type Conversion ────────────────────────────────────────
  {
    id: 43, cat: 'Type Conversion', level: 'Beginner',
    q: 'Bagaimana cara mengkonversi tipe data?',
    a: 'Gunakan fungsi konversi: int(), float(), str(), bool(), list(). Konversi dari string hanya berhasil jika isinya memang valid untuk tipe tersebut.',
    code: `print(int("42") + 8)    # str → int
print(str(100) + "!")   # int → str
print(float("3.5"))
print(list("abc"))`,
    output: `50
100!
3.5
['a', 'b', 'c']`
  },
  {
    id: 44, cat: 'Type Conversion', level: 'Intermediate',
    q: 'Kapan konversi tipe bisa gagal?',
    a: 'Konversi eksplisit gagal jika isinya tidak cocok: int("abc") menghasilkan ValueError. Ada juga konversi implisit yang berjalan otomatis: int + float hasilnya float tanpa perlu diubah.',
    code: `print(5 + 2.0)      # int + float → float
print(int("123"))   # angka dalam teks: OK
print(int("abc"))   # bukan angka: error`,
    output: `7.0
123
ValueError: invalid literal for int() with base 10: 'abc'`
  },

  // ── Import / Module ────────────────────────────────────────
  {
    id: 45, cat: 'Import / Module', level: 'Beginner',
    q: 'Apa itu module dan bagaimana menggunakannya?',
    a: 'Module adalah file berisi kode Python (fungsi, konstanta) yang bisa dipakai di file lain. Gunakan import untuk memakainya — misalnya module math berisi konstanta dan fungsi matematika siap pakai.',
    code: `import math

print(math.pi)         # konstanta pi
print(math.sqrt(16))   # akar kuadrat`,
    output: `3.141592653589793
4.0`
  },
  {
    id: 46, cat: 'Import / Module', level: 'Beginner',
    q: 'Apa bedanya import, from-import, dan as?',
    a: 'import math → akses lewat math.sqrt(). from math import sqrt → pakai langsung sqrt(). import math as m → nama pendek. Ketiganya valid; pilih yang paling jelas terbaca.',
    code: `import math
print(math.floor(3.7))

from math import ceil
print(ceil(3.2))

import math as m
print(m.pi)`,
    output: `3
4
3.141592653589793`
  },

  // ── Exception / Try Except ─────────────────────────────────
  {
    id: 47, cat: 'Exception / Try Except', level: 'Beginner',
    q: 'Apa itu try / except dan kenapa penting?',
    a: 'Error saat program berjalan (exception) biasanya langsung menghentikan program. try/except menangkap error tersebut sehingga program bisa lanjut — misalnya saat user memasukkan input yang tidak valid.',
    code: `try:
    angka = int("bukan angka")
    print(angka)
except ValueError:
    print("Input bukan angka yang valid!")

print("Program tetap lanjut")`,
    output: `Input bukan angka yang valid!
Program tetap lanjut`
  },
  {
    id: 48, cat: 'Exception / Try Except', level: 'Intermediate',
    q: 'Bagaimana menangkap error spesifik dan apa itu finally?',
    a: 'Tuliskan tipe error setelah except agar hanya menangkap error tertentu — boleh ada beberapa blok sekaligus. Blok finally selalu dijalankan apa pun hasilnya, cocok untuk pembersihan seperti menutup file.',
    code: `try:
    data = [1, 2]
    print(data[5])
except IndexError:
    print("Index tidak ada")
except ValueError:
    print("Nilai salah")
finally:
    print("Selalu dijalankan")`,
    output: `Index tidak ada
Selalu dijalankan`
  },

  // ── File Handling ──────────────────────────────────────────
  {
    id: 49, cat: 'File Handling', level: 'Beginner',
    q: 'Bagaimana membaca dan menulis file dengan with open()?',
    a: 'with open() membuka file dan menutupnya secara otomatis setelah selesai — lebih aman daripada menutup manual. Mode "r" untuk baca, "w" untuk tulis, "a" untuk tambah di akhir.',
    code: `with open("catatan.txt", "w") as f:
    f.write("Belajar Python itu seru")

with open("catatan.txt", "r") as f:
    print(f.read())`,
    output: `Belajar Python itu seru`
  },
  {
    id: 50, cat: 'File Handling', level: 'Intermediate',
    q: 'Apa bedanya mode "w" dan "a" saat menulis file?',
    a: 'Mode "w" menulis dari awal file — isi lama HILANG karena ditimpa. Mode "a" (append) menambahkan di akhir file — isi lama tetap utuh.',
    code: `with open("log.txt", "w") as f:
    f.write("baris pertama")

with open("log.txt", "a") as f:
    f.write("baris kedua")`,
    output: `isi log.txt:
baris pertama
baris kedua`
  },

  // ── List Comprehension ─────────────────────────────────────
  {
    id: 51, cat: 'List Comprehension', level: 'Intermediate',
    q: 'Apa itu list comprehension?',
    a: 'Cara singkat membuat list dari sebuah loop: [ekspresi for item in koleksi]. Satu baris menggantikan 3–4 baris loop biasa — gaya yang sangat khas Python.',
    code: `# loop biasa
hasil = []
for n in range(5):
    hasil.append(n * 2)

# list comprehension (hasil sama persis)
hasil = [n * 2 for n in range(5)]
print(hasil)`,
    output: `[0, 2, 4, 6, 8]`
  },
  {
    id: 52, cat: 'List Comprehension', level: 'Intermediate',
    q: 'Bagaimana menambahkan kondisi (filter) di list comprehension?',
    a: 'Tambahkan if di akhir untuk menyaring elemen: [x for x in data if kondisi]. Untuk if-else, letakkan di bagian depan: [a if kondisi else b for x in data].',
    code: `angka = [1, 2, 3, 4, 5, 6]
genap = [n for n in angka if n % 2 == 0]
label = ["genap" if n % 2 == 0 else "ganjil" for n in angka]
print(genap)
print(label)`,
    output: `[2, 4, 6]
['ganjil', 'genap', 'ganjil', 'genap', 'ganjil', 'genap']`
  },

  // ── Lambda ─────────────────────────────────────────────────
  {
    id: 53, cat: 'Lambda', level: 'Intermediate',
    q: 'Apa itu lambda?',
    a: 'Lambda adalah function anonim satu baris: lambda argumen: ekspresi. Cocok untuk logika singkat yang dipakai sekali — biasanya sebagai argument untuk sorted(), map(), atau filter().',
    code: `kuadrat = lambda x: x ** 2
print(kuadrat(6))

# setara dengan:
def kuadrat(x):
    return x ** 2`,
    output: `36`
  },
  {
    id: 54, cat: 'Lambda', level: 'Intermediate',
    q: 'Bagaimana lambda dipakai sebagai key di sorted()?',
    a: 'sorted() menerima parameter key — fungsi penentu urutan. Lambda sangat pas di sini: sorted(data, key=lambda x: ...) tanpa perlu membuat function terpisah dengan def.',
    code: `siswa = [("Budi", 82), ("Ani", 95), ("Cita", 78)]
urut = sorted(siswa, key=lambda s: s[1], reverse=True)
print(urut)`,
    output: `[('Ani', 95), ('Budi', 82), ('Cita', 78)]`
  },

  // ── Class & Object ─────────────────────────────────────────
  {
    id: 55, cat: 'Class & Object', level: 'Intermediate',
    q: 'Apa itu class dan apa fungsi __init__?',
    a: 'Class adalah cetak biru (blueprint) untuk membuat object. __init__ adalah method khusus yang otomatis dijalankan saat object dibuat — tempat mengatur data awal. Parameter self merujuk pada object itu sendiri.',
    code: `class Siswa:
    def __init__(self, nama, umur):
        self.nama = nama      # atribut milik object
        self.umur = umur`,
    output: ``
  },
  {
    id: 56, cat: 'Class & Object', level: 'Intermediate',
    q: 'Apa itu object dan bagaimana membuatnya?',
    a: 'Object adalah wujud nyata dari class — hasil "mencetak" dari cetak birunya. Buat dengan memanggil nama class seperti function: NamaClass(argument). Tiap object menyimpan datanya sendiri.',
    code: `class Siswa:
    def __init__(self, nama):
        self.nama = nama

a = Siswa("Budi")   # object pertama
b = Siswa("Ani")    # object kedua
print(a.nama, "dan", b.nama)`,
    output: `Budi dan Ani`
  },

  // ── Basic OOP ──────────────────────────────────────────────
  {
    id: 57, cat: 'Basic OOP', level: 'Intermediate',
    q: 'Apa itu inheritance (pewarisan)?',
    a: 'Inheritance membuat class baru mewarisi atribut dan method class lain: class Anak(Induk). Anak bisa memakai semua milik induk, menambah yang baru, atau menimpa (override) yang lama — kode tidak perlu ditulis ulang.',
    code: `class Hewan:
    def __init__(self, nama):
        self.nama = nama
    def suara(self):
        print(self.nama, "bersuara")

class Kucing(Hewan):     # Kucing mewarisi Hewan
    def suara(self):     # override method induk
        print(self.nama, "berbunyi meong")

Kucing("Oyen").suara()`,
    output: `Oyen berbunyi meong`
  },
  {
    id: 58, cat: 'Basic OOP', level: 'Intermediate',
    q: 'Apa itu encapsulation?',
    a: 'Encapsulation = menyembunyikan data di dalam object dan hanya mengaksesnya lewat method. Konvensi Python: atribut yang diawali _ atau __ dianggap "internal" — sebaiknya diubah dari luar hanya lewat method.',
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
print(r.cek_saldo())`,
    output: `50000`
  },

  // ── JSON ───────────────────────────────────────────────────
  {
    id: 59, cat: 'JSON', level: 'Intermediate',
    q: 'Bagaimana mengubah antara data Python dan JSON?',
    a: 'Module json mengubah data dua arah: json.dumps() mengubah dict/list Python menjadi string JSON, dan json.loads() mengubah string JSON kembali menjadi data Python.',
    code: `import json

data = {"nama": "Budi", "umur": 25}
teks = json.dumps(data)      # Python → JSON
print(teks)

kembali = json.loads(teks)   # JSON → Python
print(kembali["umur"])`,
    output: `{"nama": "Budi", "umur": 25}
25`
  },
  {
    id: 60, cat: 'JSON', level: 'Intermediate',
    q: 'Apa itu JSON dan seperti apa bentuknya?',
    a: 'JSON (JavaScript Object Notation) adalah format teks untuk pertukaran data — dipakai oleh API dan file konfigurasi. Bentuknya mirip dict Python: pasangan key-value dalam kurung kurawal. Perhatikan: true/false dan null ditulis huruf kecil (di Python: True/None).',
    code: `{
  "nama": "Produk A",
  "harga": 15000,
  "tags": ["baru", "laris"],
  "stok_tersedia": true
}`,
    output: ``
  },

  // ── API Basics ─────────────────────────────────────────────
  {
    id: 61, cat: 'API Basics', level: 'Intermediate',
    q: 'Apa itu API dan endpoint?',
    a: 'API (Application Programming Interface) adalah "jembatan" yang memungkinkan dua aplikasi saling bertukar data. Endpoint adalah URL spesifik tempat data diambil atau dikirim — biasanya mengembalikan data berformat JSON.',
    code: `# Contoh endpoint API toko buku:
# GET  /api/books      → ambil semua buku
# GET  /api/books/7    → ambil detail buku no. 7
# POST /api/books      → tambah buku baru`,
    output: ``
  },
  {
    id: 62, cat: 'API Basics', level: 'Intermediate',
    q: 'Bagaimana memanggil API dan membaca responsnya?',
    a: 'Kirim request HTTP (misalnya GET) ke endpoint, lalu baca responsnya. Dengan library requests: panggil .json() untuk mengubah respons JSON menjadi dict Python. Install dulu dengan: pip install requests.',
    code: `import requests

r = requests.get("https://api.example.com/users/1")
data = r.json()          # JSON → dict Python
print(data["name"])
print(r.status_code)     # 200 artinya sukses`,
    output: `Ada Lovelace
200`
  },

  // ── Useful Built-in Functions ──────────────────────────────
  {
    id: 63, cat: 'Useful Built-in Functions', level: 'Beginner',
    q: 'Built-in functions apa yang wajib dikuasai lebih dulu?',
    a: 'len() untuk ukuran, sum() untuk total, min()/max() untuk nilai terkecil/terbesar, abs() untuk nilai mutlak, dan round() untuk pembulatan. Semuanya bisa langsung dipakai tanpa import.',
    code: `nilai = [80, 92, 75, 88]
print(len(nilai))
print(sum(nilai))
print(min(nilai), max(nilai))
print(round(3.14159, 2))   # 2 angka desimal`,
    output: `4
335
75 92
3.14`
  },
  {
    id: 64, cat: 'Useful Built-in Functions', level: 'Intermediate',
    q: 'Apa kegunaan enumerate() dan zip()?',
    a: 'enumerate() memberi nomor index otomatis saat me-loop. zip() menjalankan dua list secara berpasangan sekaligus. Keduanya menggantikan trik index manual yang rawan error.',
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
mangga = hijau`
  },
  {
    id: 65, cat: 'Useful Built-in Functions', level: 'Intermediate',
    q: 'Apa kegunaan map() dan filter()?',
    a: 'map(fungsi, data) menerapkan fungsi ke setiap elemen. filter(fungsi, data) hanya menyaring elemen yang membuat fungsi bernilai True. Keduanya sering dipadukan dengan lambda.',
    code: `angka = [1, 2, 3, 4, 5, 6]
kali2 = list(map(lambda x: x * 2, angka))
genap = list(filter(lambda x: x % 2 == 0, angka))
print(kali2)
print(genap)`,
    output: `[2, 4, 6, 8, 10, 12]
[2, 4, 6]`
  }
];

/* ============================================================
   2) ELEMEN DOM
   ============================================================ */
const $ = (id) => document.getElementById(id);

const cardEl      = $('card');
const frontEl     = $('cardFront');
const backEl      = $('cardBack');
const searchInput = $('searchInput');
const levelSel    = $('levelFilter');
const catSel      = $('catFilter');
const shuffleBtn  = $('shuffleBtn');
const resetBtn    = $('resetBtn');
const btnPrev     = $('btnPrev');
const btnFlip     = $('btnFlip');
const btnNext     = $('btnNext');
const btnMastered = $('btnMastered');
const masteredLbl = $('masteredLabel');
const deckInfo    = $('deckInfo');
const counterEl   = $('cardCounter');
const fillEl      = $('progressFill');
const progLabel   = $('progressLabel');
const progPct     = $('progressPct');
const statMaster  = $('statMastered');
const statTotal   = $('statTotal');
const toastEl     = $('toast');

/* Ikon SVG kecil yang dipakai ulang saat render kartu */
const ICONS = {
  flip: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  copy: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
};

/* ============================================================
   3) STATE & PENYIMPANAN (localStorage)
   ============================================================ */
const LS_KEY = 'python-flashcards-v1';

let state = loadState() || {
  mastered: [],   // daftar id kartu yang sudah dikuasai
  order: [],      // urutan kartu (kosong = urutan asli)
  cat: 'all',     // filter kategori aktif
  level: 'all',   // filter level aktif
  q: '',          // kata kunci pencarian
  pos: 0          // posisi kartu saat ini
};

let deckCache = [];     // kartu hasil filter + urutan
let currentCard = null; // kartu yang sedang tampil
let swapTimer = null;   // timer animasi pergantian kartu
let toastTimer = null;  // timer menyembunyikan toast
let searchTimer = null; // debounce pencarian

function saveState() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify({
      mastered: state.mastered,
      order: state.order,
      cat: state.cat,
      level: state.level,
      q: state.q,
      pos: state.pos
    }));
  } catch (e) { /* storage tidak tersedia: abaikan saja */ }
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    const validIds = new Set(FLASHCARDS.map(c => c.id));
    return {
      mastered: Array.isArray(d.mastered) ? d.mastered.filter(id => validIds.has(id)) : [],
      order: Array.isArray(d.order) ? d.order.filter(id => validIds.has(id)) : [],
      cat: d.cat || 'all',
      level: d.level || 'all',
      q: typeof d.q === 'string' ? d.q : '',
      pos: Number.isInteger(d.pos) && d.pos > 0 ? d.pos : 0
    };
  } catch (e) {
    return null; // data rusak: mulai dari awal
  }
}

/* ============================================================
   4) UTIL
   ============================================================ */
const esc = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const pad = (n) => String(n).padStart(2, '0');
const isMastered = (id) => state.mastered.includes(id);

/* ============================================================
   5) SYNTAX HIGHLIGHTING SEDERHANA (tanpa library)
   ============================================================ */
const KEYWORDS = ['def','return','if','elif','else','for','while','in','import','from',
  'as','and','or','not','is','True','False','None','try','except','finally','with',
  'pass','break','continue','class','lambda','global','raise','del'];

const BUILTINS = ['print','len','range','type','input','int','str','float','bool',
  'list','dict','set','tuple','sum','sorted','min','max','abs','round','enumerate',
  'zip','open','map','filter','isinstance','super'];

/* Satu regex dengan urutan prioritas: komentar → string → angka →
   keyword → builtin → pemanggilan fungsi. Semua dijalankan pada
   teks yang sudah di-escape, jadi hasilnya aman dimasukkan ke HTML. */
const TOKEN_RE = new RegExp(
  '(#[^\\n]*)' +
  "|(\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')" +
  '|(\\b\\d+(?:\\.\\d+)?\\b)' +
  '|\\b(' + KEYWORDS.join('|') + ')\\b' +
  '|\\b(' + BUILTINS.join('|') + ')\\b' +
  '|([A-Za-z_]\\w*(?=\\()',
  'g'
);

function highlight(code) {
  return esc(code).replace(TOKEN_RE, (m, com, str, num, kw, bi, fn) => {
    if (com) return '<span class="tok-com">' + com + '</span>';
    if (str) return '<span class="tok-str">' + str + '</span>';
    if (num) return '<span class="tok-num">' + num + '</span>';
    if (kw)  return '<span class="tok-kw">'  + kw  + '</span>';
    if (bi)  return '<span class="tok-bi">'  + bi  + '</span>';
    if (fn)  return '<span class="tok-fn">'  + fn  + '</span>';
    return m;
  });
}

/* ============================================================
   6) FILTER & PENYUSUNAN DECK
   ============================================================ */
function matchesQuery(c, q) {
  return (c.q + ' ' + c.a + ' ' + c.cat + ' ' + c.level + ' ' + c.code)
    .toLowerCase().includes(q);
}

function getDeck() {
  let cards = FLASHCARDS.filter(c =>
    (state.level === 'all' || c.level === state.level) &&
    (state.cat === 'all' || c.cat === state.cat) &&
    (!state.q || matchesQuery(c, state.q))
  );
  // Jika deck pernah diacak, hormati urutan tersebut
  if (state.order.length) {
    const rank = new Map(state.order.map((id, i) => [id, i]));
    cards = cards.slice().sort((a, b) =>
      ((rank.get(a.id) ?? 1e9) - (rank.get(b.id) ?? 1e9)) || (a.id - b.id)
    );
  }
  return cards;
}

function refresh() {
  deckCache = getDeck();
  if (deckCache.length) {
    state.pos = Math.min(state.pos, deckCache.length - 1);
  } else {
    state.pos = 0;
  }
  renderCardContent();
  updateMeta();
}

/* Trigger ulang animasi masuk kartu (dipakai shuffle/reset) */
function pulseIn() {
  cardEl.classList.remove('in-r');
  void cardEl.offsetWidth; // paksa reflow agar animasi bisa berjalan lagi
  cardEl.classList.add('in-r');
}

/* ============================================================
   7) RENDER
   ============================================================ */
function tagRow(c) {
  const int = c.level === 'Intermediate';
  return '<div class="card-tags">'
    + '<span class="tag">' + esc(c.cat) + '</span>'
    + '<span class="tag tag-level' + (int ? ' tag-int' : '') + '">' + c.level + '</span>'
    + (isMastered(c.id) ? '<span class="tag tag-mastered">' + ICONS.check + ' Dikuasai</span>' : '')
    + '</div>';
}

function renderCardContent() {
  cardEl.classList.remove('flipped'); // kartu baru selalu mulai dari sisi depan
  const c = deckCache[state.pos];
  currentCard = c || null;

  // Deck kosong → tampilkan empty state yang bisa ditindaklanjuti
  if (!c) {
    frontEl.innerHTML =
      '<div class="empty">'
      + '<svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      + '<h2>Tidak ada kartu yang cocok</h2>'
      + '<p>Coba kata kunci atau filter lain — misalnya "list", "lambda", atau kategori Functions.</p>'
      + '<button class="btn btn-primary" id="clearFilterBtn" type="button">Bersihkan Filter</button>'
      + '</div>';
    backEl.innerHTML = '';
    cardEl.removeAttribute('aria-label');
    return;
  }

  // ── Sisi depan: pertanyaan ──
  frontEl.innerHTML =
    tagRow(c)
    + '<h2 class="card-question">' + esc(c.q) + '</h2>'
    + '<div class="card-hint">' + ICONS.flip
    + '<span>Klik kartu atau tekan <kbd>Space</kbd> untuk membalik</span></div>'
    + '<span class="card-watermark" aria-hidden="true">' + pad(state.pos + 1) + '</span>';

  // ── Sisi belakang: jawaban + kode + output ──
  backEl.innerHTML =
    tagRow(c)
    + '<p class="card-answer">' + esc(c.a) + '</p>'
    + '<div class="code-block">'
    +   '<div class="code-head">'
    +     '<span class="code-lang">python</span>'
    +     '<button class="copy-btn" type="button" title="Salin kode">' + ICONS.copy + '<span>Salin</span></button>'
    +   '</div>'
    +   '<pre><code>' + highlight(c.code) + '</code></pre>'
    + '</div>'
    + (c.output
        ? '<div class="output-block"><div class="output-label">Output</div>'
          + '<pre><code>' + esc(c.output) + '</code></pre></div>'
        : '');

  cardEl.setAttribute('aria-label',
    'Kartu ' + (state.pos + 1) + ' dari ' + deckCache.length + '. ' + c.q
    + '. Tekan Space untuk membalik.');
}

function updateMeta() {
  const deck = deckCache;
  const total = deck.length;

  deckInfo.textContent = total + ' kartu';
  counterEl.innerHTML = total
    ? 'CARD <b>' + pad(state.pos + 1) + '</b> / ' + total
    : 'CARD <b>–</b> / 0';

  // Progress = persentase kartu dikuasai pada deck aktif
  const masteredCount = deck.filter(c => isMastered(c.id)).length;
  const pct = total ? Math.round(masteredCount / total * 100) : 0;
  fillEl.style.width = pct + '%';
  progLabel.textContent = masteredCount + ' / ' + total + ' dikuasai';
  progPct.textContent = pct + '%';

  // Statistik global di header
  statMaster.textContent = state.mastered.length;
  statTotal.textContent = FLASHCARDS.length;

  // Status tombol navigasi
  btnPrev.disabled  = total === 0 || state.pos <= 0;
  btnNext.disabled  = total === 0 || state.pos >= total - 1;
  btnFlip.disabled  = total === 0;
  btnMastered.disabled = total === 0;

  // Status tombol "Dikuasai"
  const m = total > 0 && isMastered(deck[state.pos].id);
  btnMastered.classList.toggle('is-active', m);
  masteredLbl.textContent = m ? 'Dikuasai' : 'Tandai Dikuasai';
}

/* ============================================================
   8) AKSI
   ============================================================ */
function flipCard() {
  if (!deckCache.length || !currentCard) return;
  cardEl.classList.toggle('flipped');
}

function goTo(newPos, dir) {
  // Batalkan animasi yang masih berjalan agar klik cepat tetap mulus
  if (swapTimer) {
    clearTimeout(swapTimer);
    cardEl.classList.remove('out-l', 'out-r', 'in-l', 'in-r');
    swapTimer = null;
  }
  state.pos = newPos;
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

const goNext = () => { if (state.pos < deckCache.length - 1) goTo(state.pos + 1, 'next'); };
const goPrev = () => { if (state.pos > 0) goTo(state.pos - 1, 'prev'); };

function toggleMastered() {
  const c = deckCache[state.pos];
  if (!c) return;
  const i = state.mastered.indexOf(c.id);
  if (i >= 0) {
    state.mastered.splice(i, 1);
    showToast('Ditandai belum dikuasai');
  } else {
    state.mastered.push(c.id);
    showToast('Kartu ditandai dikuasai');
  }
  saveState();
  renderCardContent();
  updateMeta();
}

function shuffleDeck() {
  // Fisher–Yates shuffle atas seluruh id kartu
  const ids = FLASHCARDS.map(c => c.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  state.order = ids;
  state.pos = 0;
  saveState();
  refresh();
  pulseIn();
  showToast('Kartu berhasil diacak');
}

function resetProgress() {
  state.mastered = [];
  state.order = [];
  state.pos = 0;
  saveState();
  refresh();
  pulseIn();
  showToast('Progress direset — mulai belajar lagi dari awal');
}

function clearFilters() {
  state.cat = 'all';
  state.level = 'all';
  state.q = '';
  state.pos = 0;
  searchInput.value = '';
  levelSel.value = 'all';
  catSel.value = 'all';
  saveState();
  refresh();
  showToast('Filter dibersihkan');
}

/* ============================================================
   9) TOAST & COPY
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
   10) EVENT LISTENER
   ============================================================ */

/* Klik pada kartu: salin kode, bersihkan filter, atau flip.
   Kalau user sedang menyeleksi teks kode, jangan dibalik. */
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

/* Shortcut keyboard: Space, panah, Enter saat kartu fokus, M */
document.addEventListener('keydown', (e) => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'select' || tag === 'textarea') return;

  if (e.code === 'Space')       { e.preventDefault(); flipCard(); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
  else if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
  else if (e.key === 'Enter' && e.target === cardEl) { flipCard(); }
  else if (e.key === 'm' || e.key === 'M') { toggleMastered(); }
});

btnFlip.addEventListener('click', flipCard);
btnNext.addEventListener('click', goNext);
btnPrev.addEventListener('click', goPrev);
btnMastered.addEventListener('click', toggleMastered);
shuffleBtn.addEventListener('click', shuffleDeck);
resetBtn.addEventListener('click', resetProgress);

levelSel.addEventListener('change', () => {
  state.level = levelSel.value;
  state.pos = 0;
  saveState();
  refresh();
});

catSel.addEventListener('change', () => {
  state.cat = catSel.value;
  state.pos = 0;
  saveState();
  refresh();
});

/* Pencarian dengan debounce 180ms agar tidak render di setiap huruf */
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.q = searchInput.value.trim().toLowerCase();
    state.pos = 0;
    saveState();
    refresh();
  }, 180);
});

/* ============================================================
   11) INIT
   ============================================================ */
(function init() {
  // Isi dropdown kategori otomatis dari data (beserta jumlah kartunya)
  const cats = [...new Set(FLASHCARDS.map(c => c.cat))];
  catSel.innerHTML =
    '<option value="all">Semua Kategori</option>'
    + cats.map(c => {
        const n = FLASHCARDS.filter(x => x.cat === c).length;
        return '<option value="' + esc(c) + '">' + esc(c) + ' (' + n + ')</option>';
      }).join('');

  // Pulihkan UI dari state yang tersimpan di localStorage
  searchInput.value = state.q;
  levelSel.value = state.level;
  catSel.value = cats.includes(state.cat) ? state.cat : 'all';

  refresh();
})();

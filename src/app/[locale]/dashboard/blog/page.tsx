"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FileText,
  Plus,
  Pencil,
  Trash2,
  X,
  ImageIcon,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  published: boolean;
  date: string;
}

type FormData = {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
};

// ---------------------------------------------------------------------------
// Demo data
// ---------------------------------------------------------------------------

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "2025年日本二手车市场展望",
    category: "公司动态",
    excerpt: "分析2025年日本二手车市场趋势，价格走势及热门车型推荐。",
    content: "2025年日本二手车市场持续走强...",
    coverImage: "/images/blog/city-road.jpg",
    published: true,
    date: "2025-06-01",
  },
  {
    id: "2",
    title: "如何选择适合自己的日本二手车",
    category: "购车指南",
    excerpt: "从预算、用途到品牌偏好，全面指导您选择理想的日本二手车。",
    content: "选择二手车需要考虑多个因素...",
    coverImage: "/images/blog/car-keys.jpg",
    published: true,
    date: "2025-05-20",
  },
  {
    id: "3",
    title: "出口到非洲的完整流程指南",
    category: "出口指南",
    excerpt: "详细讲解从选车到海运出口至非洲各港口的全流程。",
    content: "出口流程包括多个步骤...",
    coverImage: "/images/blog/workshop.jpg",
    published: true,
    date: "2025-05-15",
  },
  {
    id: "4",
    title: "Toyota HiAce 选购要点",
    category: "购车指南",
    excerpt: "Toyota HiAce是最受欢迎的出口车型之一，本文介绍选购时需要注意的事项。",
    content: "HiAce作为商用车的王者...",
    coverImage: "/images/blog/ev-car.jpg",
    published: false,
    date: "2025-05-10",
  },
  {
    id: "5",
    title: "日本二手车检验报告解读",
    category: "行业资讯",
    excerpt: "教您如何像专业买家一样阅读和理解日本车辆检验报告。",
    content: "日本车辆检验报告包含丰富的信息...",
    coverImage: "/images/blog/office-business.jpg",
    published: false,
    date: "2025-05-05",
  },
];

const emptyForm: FormData = {
  title: "",
  category: "公司动态",
  excerpt: "",
  content: "",
  coverImage: "",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function DashboardBlogPage() {
  const t = useTranslations("dashboard");
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormData>(emptyForm);

  // Form handlers
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage,
    });
    setShowModal(true);
  };

  const handleSave = (publish: boolean) => {
    if (editingId) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, ...form, published: publish, date: new Date().toISOString().slice(0, 10) }
            : p
        )
      );
    } else {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        ...form,
        published: publish,
        date: new Date().toISOString().slice(0, 10),
      };
      setPosts((prev) => [newPost, ...prev]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm(t("blogConfirmDelete"))) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm";

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t("blog")}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {posts.filter((p) => p.published).length} {t("blogPublished")} ·{" "}
            {posts.filter((p) => !p.published).length} {t("blogDraft")}
          </p>
        </div>
        <button
          onClick={openNew}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          {t("blogNew")}
        </button>
      </div>

      {/* Posts Table */}
      {posts.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">{t("blogEmpty")}</p>
          <button
            onClick={openNew}
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            <Plus className="w-4 h-4" />
            {t("blogNew")}
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                <th className="px-5 py-3">{t("blogTitle")}</th>
                <th className="px-5 py-3">{t("blogCategory")}</th>
                <th className="px-5 py-3">{t("blogStatus")}</th>
                <th className="px-5 py-3">{t("blogDate")}</th>
                <th className="px-5 py-3 text-right">{t("blogActions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {post.coverImage ? (
                        <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900 line-clamp-1">
                          {post.title}
                        </p>
                        <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-600">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {post.published ? t("blogPublished") : t("blogDraft")}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openEdit(post)}
                        className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        title={t("blogEdit")}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title={t("blogDelete")}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingId ? t("blogEdit") : t("blogNew")}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("blogTitle")}
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="Enter post title"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("blogCategory")}
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="公司动态">公司动态</option>
                  <option value="行业资讯">行业资讯</option>
                  <option value="购车指南">购车指南</option>
                  <option value="出口指南">出口指南</option>
                </select>
              </div>

              {/* Cover Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("blogCoverImage")}
                </label>
                <input
                  name="coverImage"
                  value={form.coverImage}
                  onChange={handleChange}
                  className={inputCls}
                  placeholder="/images/blog/example.jpg"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("blogExcerpt")}
                </label>
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  rows={2}
                  className={inputCls}
                  placeholder="Brief summary of the post"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t("blogContent")}
                </label>
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  rows={8}
                  className={inputCls}
                  placeholder="Write your post content here..."
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 rounded-b-2xl">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {t("blogCancel")}
              </button>
              <button
                onClick={() => handleSave(false)}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {t("blogSaveDraft")}
              </button>
              <button
                onClick={() => handleSave(true)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors shadow-sm"
              >
                {t("blogPublish")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
